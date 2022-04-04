const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const IndexRouter=require('./routes/index.routes');
const port = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://aman:12365@cluster0.vigvo.mongodb.net/Users');
 const CategoryRouter=require('./routes/category.routes');
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/category',CategoryRouter);
app.use('/',IndexRouter);
app.listen(port,(result=>{
    console.log("Server is running");

}))