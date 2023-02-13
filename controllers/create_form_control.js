
const admin_forms_info = require("../db_controls/admins_forms_info_db");
const create_db_collection = require("../db_controls/create_mongo_db");

function create_form(req,res){
    var admin_name=req.body.admin_name;
    var form_name=req.body.title;
    
    
    
    

    var questions={
        q1:req.body.q1,
        q2:req.body.q2
    }

    create_db_collection(admin_name,form_name,questions)

    admin_forms_info.save_admin_form_info(admin_name,form_name)

    



// mongoose.connection.close();
// save_admin_form_info(admin,title)


res.send("saved successfully")

}

module.exports=create_form;