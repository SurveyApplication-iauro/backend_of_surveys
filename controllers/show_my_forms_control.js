const mongoose =require("mongoose");
const admins_forms_info= require("../db_controls/admins_forms_info_db");
const convert_json_obj_arr_to_array = require("../tools/json_array_to_array");



async function show_my_forms(req,res){
  var admin_name=req.user_name;
      admins_forms_info.get_admins_form_info(admin_name).then((my_forms)=>{
        console.log(my_forms)
        obj={
          admin_name:admin_name,
          my_forms:my_forms

        }
         res.json(obj)
    })
    
}


// function show_my_forms(){
//     admin_name="pratik";
//     get_admins_form_info(admin_name).then((result)=>{
//         data=convert_json_obj_arr_to_array(result,"Form_name")
//         console.log(data)
//     })
// }

// show_my_forms();


module.exports=show_my_forms;