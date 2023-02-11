const express=require("express");
const mongoose= require("mongoose");

function create_database(user_name){
    connection=mongoose.connect("mongodb://localhost:27017/"+user_name).then(()=>{
        console.log("connection has been made")
    })
    .catch((e)=>{
        console.log(e);
    })
    return connection;
}

module.exports=create_database