# Syntax MYSQL SESSION 04 - JCWD0408

```
create database jcwd0408_db;

use jcwd0408_db;
show tables;

show full tables;

alter table students add gender enum('male','female') not null;

create table customers (
	id int(5) primary key NOT NULL auto_increment,
	name varchar(100),
    address varchar(255),
    created_at datetime,
    updated_at timestamp
);

drop table customers;

alter table students modify column gender enum('male','female') null;

insert into students (name, gender, address,created_at)
values
("Dina","female","Tangerang",now()),
("Komeng","male","Bali",now()),
("Fulan","male","BSD",now());
-- BULK INSERT --
-- ini comment , tidak bisa dieksekusi --
-- insert into students (name, gender, address) values ("Rian","male","Bandung");
-- insert into students (name, gender, address, created_at) values ("Khodiyah","female","Bandung",now());
select * from students;

select s.* from students s;
select a.name as nm, a.address as ad from students a;
select * from students s where address = 'BSD';
select count(*) as jumlah_orang from students s where address = 'Tangerang';
select * from students s where address = 'Tangerang' and gender = "female";
select * from students s where address = 'Tangerang' or gender = "female";

select distinct address from students s;
select count(distinct address) as jumlah_kota from students s;

update students set created_at = now() where id = 1;
update students set name = "Rian D ikison", address = 'Jakarta', gender = 'male' where id = 1;
-- update students set name = "Rian D ikison", address = 'Jakarta', gender = 'male' where email = 'rian@gmail.com';

delete from students where id = 6;
-- delete from students where address = 'Tangerang';

select s.* from students s where address like '%ba%';
select s.* from students s where address in ('Bali',"Tangerang");
select s.* from students s where address <> "Bali";
select s.* from students s where address not in ("Bali","Tangerang");

update students set email = '' where address not in ("Bali","Tangerang");

select s.* from students s group by address;
select s.* from students s group by address having gender='male' ;

select s.* from students s limit 3;

-- buat table products --
-- name , price, stock,category, created_at, updated_at
-- category itu hanya ada tipe 'pc sparepart, gedget, tools'

-- isi datanya 5

-- munculkan semua products
-- munculkan semua product yang price diatas 1000000
-- munculkan semua product yang price diatas 1000000 dan stock nya < 15

create table products (
	id int(3) primary key not null auto_increment,
	name varchar(255) not null,
	price int(9) not null,
	stock int(5) not null,
	category enum('pc sparepart','gadget','tools') default null,
	created_at datetime default now(),
	updated_at timestamp
);

insert into products (name, price, stock, category)
values
('RTX 4090 msi 12GB',40000000, 30,'pc sparepart'),
('Vgen RAM 16GB',1400000, 10,'pc sparepart'),
('Mic Rode ',1500000, 16,'tools'),
('Iphone 12 128GB ',12000000, 5,'gadget'),
('Motherboard msi ',1800000, 12,'pc sparepart');

select * from products p ;
select * from products p where price > 10000000;
select * from products p where price > 10000000 and stock < 15;

update products set stock = (select stock from products where id = 4) + 3 where id = 4;

select count(*) as jumlah_jenis_barang from products p where price > 10000000;
select sum(price) as jumlah_price from products p ;
select max(price) as harga_barang_termahal from products p ;
select min(price) as harga_barang_termurah from products p ;

select * from products p group by category;

select name, price, stock, (price * stock) as total_penjualan_maksimal from products p ;
```
