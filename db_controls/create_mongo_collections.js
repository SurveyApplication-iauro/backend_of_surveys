
const mongoose = require("mongoose");
const create_database = require("./create_mongo_db");

function create_schema(user_name){
    var dynamic_schema=new mongoose.Schema({},{strict:false});
    dynamic_model= mongoose.model(user_name, dynamic_schema);
    return dynamic_model;
}

// db=create_database("admin_4");
// Model=create_schema("collec_1")
// collection=new Model({
//     q1:"krrish",
//     q2:"digole"

// })


// collection.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err)
// })




module.exports=create_schema;