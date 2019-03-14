const m = require('mysql');
const express = require('express');
var app = express();
//const b = require('body-parser');
const hbs=require('hbs');
app.set("views", __dirname );
app.set('view engine', 'hbs');
// app.use(b.json);
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

var con = m.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'student'
});

con.connect( (err) => {
    if(!err)
        console.log("connected")
    else
    console.log(err)
});

// app.get('/', (req,res) => {
//     res.render('content.hbs')
// })

app.get('/stud', (req,res) => {
    con.query('SELECT * FROM stud', (err,result) => {
        if(!err){
        res.send(result)
        }
        else 
            console.log('error::'+err);
    })
})

app.get('/stud/:id', (req,res) => {
    console.log('start');
    con.query('SELECT * FROM stud WHERE id = ?', [req.params.id], (err,result) => {
        if(!err){
        res.send(result)
        }
        else 
            console.log('error::'+err);
    })
})

app.post('/data', (req,res) => {
    con.query('INSERT INTO stud (id,name,branch,email) VALUES (?,?,?,?)', 
    [req.body.id,req.body.name,req.body.branch,req.body.email], 
    (err,result) => {
        if(!err){
        res.send(result)
        }
        else 
            console.log('error::'+err);
    })
})


app.listen(3000, () => console.log('started'));
