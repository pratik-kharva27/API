import mysql from 'mysql2';
import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine','ejs');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'proses1412',
    databas: 'student'
});

conn.connect((err)=>{
    if(err){console.log(err);}
    else{console.log("connection done!!");}
})

app.get('/', (req, res) => {
    const perPage = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * perPage;

    conn.query('SELECT * FROM student.studentinfo LIMIT ?, ?', [offset, perPage], (err, data) => {
        if (err) {
            console.error('Error fetching data: ' + err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Assuming you have totalRows as the total number of rows in your table
        conn.query('SELECT COUNT(*) AS count FROM student.studentinfo', (err, result) => {
            if (err) {
                console.error('Error fetching total row count: ' + err);
                res.status(500).send('Internal Server Error');
                return;
            }

            const totalRows = result[0].count;
            const totalPages = Math.ceil(totalRows / perPage);

            res.render('display', { data: data, page: page, totalPages: totalPages });
        });
    });
});


app.listen(port, (err)=> {
    if(err){console.log(err);}
    else{console.log(`surver run on ${port}`)}
});
