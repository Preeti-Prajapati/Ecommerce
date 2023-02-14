const express= require( 'express');
const app=express();
const cors= require( 'cors');
const mysql2= require( 'mysql2');
const port=5000;

app.use(cors());
app.use(express.json());

const db=mysql2.createConnection({
host:'localhost',
user:'root',
password:'superuser',
database:'Products'
})

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/getProducts',(req,res)=>{
    const sqldata='SELECT * FROM product_details';
    db.query(sqldata,(err,result)=>{
        res.send(result)
    })
})
app.get('/getProducts',(req,res)=>{
    const sqldata='SELECT * FROM product_details';
    db.query(sqldata,(err,result)=>{
        res.send(result)
    })
})

app.get('/',(req,res)=>{
res.send('hello')
})
app.listen(port,()=>console.log(`server is runnning on ${port}`))