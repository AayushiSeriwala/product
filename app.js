const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const IndexRouter=require('./routes/index.routes');
mongoose.connect('mongodb+srv://aman:12365@cluster0.vigvo.mongodb.net/Users');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',IndexRouter);



app.listen(3000,(result=>{
    console.log("Server is running");

}))