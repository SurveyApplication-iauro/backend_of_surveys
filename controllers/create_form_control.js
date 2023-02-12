const create_database = require("../db_controls/create_mongo_db");
const mongoose=require("mongoose");
const create_schema=require("../db_controls/create_mongo_collections");
const admin_forms_info = require("../db_controls/admins_forms_info_db");

function create_form(req,res){
    var admin=req.body.admin_name;

    
    var connection=create_database(admin);
    var title=req.body.title;
    var Model=create_schema(title)
    
    
    

    var questions={
        q1:req.body.q1,
        q2:req.body.q2
    }

    var collection=new Model(questions)

collection.save().then((result)=>{
    console.log(result);
    mongoose.connection.close().then(()=>{
        console.log("the create_form connection has been stoped ")
        admin_forms_info.save_admin_form_info(admin,title)
    });
    
    

}).catch((err)=>{
    console.log(err)
})

// mongoose.connection.close();
// save_admin_form_info(admin,title)


res.send("saved successfully")

}

module.exports=create_form;