
const admin_forms_info = require("../db_controls/admins_forms_info_db");
const create_db_collection = require("../db_controls/create_mongo_db");

function create_form(req,res){
    var admin_name=req.user_name;
    
    //var admin_name="jaydev"
    //var form_name=req.body.title;
    var form_name=req.body[0].data.formTitle

    document={type:"questions"};
    k=0;
    for(i of req.body){
       Object.assign(document,{["q"+k]:i})
       k++;
    }
    
    console.log(document)
    
    
    console.log(req.body[0].data.formTitle)

    console.log(typeof(req.body))

    create_db_collection(admin_name,form_name,document)

    admin_forms_info.save_admin_form_info(admin_name,form_name)

    



// mongoose.connection.close();
// save_admin_form_info(admin,title)


res.json({"messgae":"saved successfully"})

}

module.exports=create_form;