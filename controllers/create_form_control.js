const create_database = require("../db_controls/create_mongo_db");
const mongoose=require("mongoose");
const create_schema=require("../db_controls/create_mongo_collections")

function create_form(req,res){
    admin=req.body.admin_name;
    connection=create_database(admin);
    title=req.body.title;
    Model=create_schema(title)
    
    

    questions={
        q1:req.body.q1,
        q2:req.body.q2
    }

    collection=new Model(questions)

collection.save().then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
})


}

module.exports=create_form;