import express from 'express';
import {connection} from '../connection_databases.js';
const router = express.Router();
// import { app } from '../newServer.js';
// const app = express();

router.post('/', (req, res) => {
    const { name } = req.body; 
    console.log(req.body,"asdf");
    const sql = `INSERT INTO empoyee (name) VALUES (?)`;
    connection.query(sql,[name],(err,data) => {
        if (err) {
            console.error('Error inserting data:', err);
        } else {
            console.log('Data inserted successfully:', data);
        }
    });
    res.send('Date Added')
});

export {router as UserRouter};