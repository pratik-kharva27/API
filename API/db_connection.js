import mysql from 'mysql';

    const conn = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'mydb'
    })
    
    conn.connect((err)=>{
        if(err) throw err;
        // //CREATE DATABASES 
        console.log("db connected successfully....");
        // conn.query("CREATE DATABASE mydb", (err)=>{
            // if(err) throw err;
            // console.log("Databases create successfully....");
        // })

        // //CREATE TABLE 
        // conn.query("CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))", (err)=>{
        //     if(err) throw err;
        //     console.log("Create databases successfully.....");
        // });

    
    })

export {conn as connection};