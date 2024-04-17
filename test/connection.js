import mysql from 'mysql';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("database connection successfully...");
})

export { conn as connection};