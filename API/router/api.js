import express from "express";
import { connection } from "../db_connection.js";

const route = express.Router();

route.post("/", (req, res) => {
  const sql = "INSERT INTO employee (name,address) VALUE(?,?)";
  for (let i = 0; i < req.body.length; i++) {
    connection.query(sql, [req.body[i].name, req.body[i].address], (err) => {
      if (err) throw err;
      console.log("data insert successfully...");
    });
  }
  res.send("data add");
});

// route.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const sql = "SELECT * FROM employee WHERE id = ?";
//   connection.query(sql, [id], (err, data) => {
//     if (err) throw err;
//     console.log("data display successfully....");
//     res.send(data);
//   });
// });


route.get('/',(req,res)=>{
  const sql = "SELECT * FROM employee";
  connection.query(sql,(err,data)=>{
    if(err) throw err;
    console.log("display all table data ");
    res.send(data)
  });
});

route.delete('/:id',(req,res)=>{
    const {id} = req.params
    const sql = "DELETE FROM employee WHERE id = ?"
    connection.query(sql,[id],(err,data)=>{
        if(err) throw err;
        console.log("delete data successfully..");
        res.send("data delete ")
    })
})
export { route as user };
