const express=require("express");
const mongoose= require("mongoose");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";




function create_db_collection(db_name,collection_name,document){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_name);
        
        dbo.collection(collection_name).insertOne(document, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      
}







module.exports=create_db_collection;