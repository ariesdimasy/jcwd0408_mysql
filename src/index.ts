import express, { Application, Request, Response } from "express"
import cors from "cors"
import 'dotenv/config'
import { QueryError } from "mysql2"
import db from "./config/database"


const app: Application = express()
const PORT: number = 5600

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        message: "connected mysql"
    })
})

db.getConnection((err, connection) => {
    if (err) {
        return console.log(err)
    }
    return console.log("connection success", connection.threadId)

})

app.get("/students", (req: Request, res: Response) => {

    db.query("SELECT * FROM students where address = 'Bandung'", (err: QueryError, result: any) => {
        if (err) {
            return res.status(500).send({
                message: err
            })
        }

        res.status(200).send({
            data: result,
            message: "success"
        })
    })
})

app.post("/students", (req: Request, res: Response) => {

    const { name, address, gender } = req.body

    db.query(`INSERT INTO students (name, address, gender, created_at) values ('${name}','${address}','${gender}',now())`, (err: QueryError, result: any) => {
        if (err) {
            return res.status(500).send({
                message: err
            })
        }

        res.status(200).send({
            data: result,
            message: "success"
        })
    })
})

app.listen(PORT, () => {
    console.log(" server run on port = ", PORT)
})