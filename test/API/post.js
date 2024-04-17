import express from 'express';
import { connection } from '../connection.js';

const route = express.Router()
//post api 
route.post('/',(req,res)=>{
    const {name} = req.body;
    const sql = 'INSERT INTO empoyee (name) VALUE(?);'
    connection.query(sql, [name],(err, data)=>{
        if(err) throw err;
        console.log("data insert successfull.....");
    })
    res.send('data add');   
});


//get api 
route.get('/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'SELECT * FROM empoyee where id= ?;'
    connection.query(sql,[id],(err,data)=>{
        if(err) throw err;
        res.send(data);
    } )
})

//dalete
route.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM empoyee where id= ?;'
    connection.query(sql,[id],(err,data)=>{
        if(err) throw err;
        res.send(data);
    } )
})

//update 
route.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const sql = 'UPDATE empoyee SET name=? WHERE id= ?;'
    connection.query(sql,[name,id],(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})

export {route as user};
