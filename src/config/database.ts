import mysql, { QueryError } from "mysql2"

export default mysql.createPool({
    // host: process?.env?.DATABASE_HOSTNAME,
    // user: process?.env?.DATABASE_USERNAME,
    // password: process?.env?.DATABASE_PASSWORD,
    // port: process?.env?.DATABASE_PORT,
    // database: process?.env?.DATABASE_NAME
    host: "localhost",
    user: 'root',
    password: '',
    port: 3306,
    database: "jcwd0408_db"
})