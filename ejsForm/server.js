import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.set('view engine','ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('form'); 
})

app.post('/submit', (req, res) => {
    const rollno = req.body.rollno;
    const name = req.body.name;
    const address = req.body.address;

    console.log('RollNo:', rollno);
    console.log('Name:', name);
    console.log('Address:', address);
    res.send('Data received and logged successfully!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))