var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var morgan=require('morgan');
var msql=require('mysql');
app.use(morgan('dev'));

app.use(bodyParser.json({extended:true}));
var con=msql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'user'
})
app.get('/',function(req,res){
    res.sendFile(__dirname+'/dist/angularProject/index.html');
})
app.get('/list',function(req,res){
    con.query("SELECT * FROM record",function(err,rows){
if(err){console.log(err)}else{
res.send(JSON.stringify(rows));
}})
})
app.listen(4000);