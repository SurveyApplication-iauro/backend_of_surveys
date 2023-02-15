const mongoose = require("mongoose");

i=1

function access_collection(admin_name){
    var dynamic_schema=mongoose.Schema({},{strict:false},{ collection : admin_name })

   var  dynamic_model= mongoose.model(admin_name+i, dynamic_schema,admin_name)
    
   i++;
   return dynamic_model;
}

module.exports=access_collection;