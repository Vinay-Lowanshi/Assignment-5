const express = require("express");
const path = require("path");


shop=express.Router();

shop.get('/product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

module.exports=shop;