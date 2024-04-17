import express from 'express';
import  {UserRouter}  from './user-api.js';
import ejs from 'ejs';

const app = express();
const port = 3000

app.use(express.json());
app.use('/user',UserRouter);

console.log(ejs,"sparrow");

app.set('view engine','view ');
app.set('views','./routes');

app.get('./',(req,res)=>{
    res.send('data display')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

