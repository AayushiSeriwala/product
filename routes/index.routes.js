const express=require('express');
const User=require('../model/user.model.js');



const router=express.Router();
router.post('/signup',(request,response)=>{
  User.create({username:request.body.username,email:request.body.email,password:request.body.password,mobile:request.body.mobile})
  .then(result=>{
    console.log(result);
    return response.status(200).json(result);hr
  })
  
  .catch(err=>{
    console.log(err);
    return response.status(500).json({error:'Internal Server'});
  })
})
router.post('/signin',(request,response)=>{
  User.findOne({email:request.body.email,password:request.body.password})
  .then(result=>{
  console.log(result);
  if(result){
    return response.status(200).json({msg:"login Success"});
  }
  else{
    return response.status(201).json({msg:"Login Failed"});
  }
})
  
  .catch(err=>{
    console.log(err);
    return response.status(500).json({msg:"Internal Server Failed"});git 


  })




})





 module.exports=router;






