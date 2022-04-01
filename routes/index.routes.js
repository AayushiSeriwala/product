const express=require('express');
const User=require('../model/user.model.js');
const jwt = require('jsonwebtoken');
  
const router=express.Router();
router.post('/signup',(request,response)=>{
  User.create({username:request.body.username,email:request.body.email,password:request.body.password,mobile:request.body.mobile})
  .then(result=>{
    console.log(result);
    return response.status(200).json({status:'registeration success'});
    })
  
  
  .catch(err=>{
    console.log(err);
    return response.status(500).json({status:'registeration failed'});
  })
})
router.post('/signin',(request,response)=>{
  User.findOne({email:request.body.email,password:request.body.password})
  .then(result=>{
  if(result){
    
      let payload={subject:result._id};
      let token=jwt.sign(payload,"hjhhkjhjkhdjk");
      
      console.log(result)
      return response.status(200).json({status:'logging success',current_user:result,token:token})
    }
  
  

  else{
    return response.status(201).json({status:'logging failed'});
  }
})
  
  .catch(err=>{
    console.log(err);
    return response.status(500).json({msg:"Internal Server Failed"});git 


  })




})





 module.exports=router;
