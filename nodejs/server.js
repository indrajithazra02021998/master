var express=require('express');
var app=express();


app.get('/',function(req,res){

res.send(JSON.stringify({message:"successfully send.."}));
});   
app.listen(3000,function(){
    console.log("server is running..");
});