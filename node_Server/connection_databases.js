import { createConnection } from 'mysql';
var conn = createConnection({
    host: "localhost",
    user: "root",
    password: "proses1412",
    database: "student"
})
conn.connect( (err)=>{
    if(err)  throw err;
    console.log("connection successfully...");
});

export {conn as connection } 