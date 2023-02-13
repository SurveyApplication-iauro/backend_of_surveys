const { get_forms_questions, save_form_answer } = require("../db_controls/users_answers_db")

// the below function will provide questions to the user so that user can answer the questions


async function user_get_questions(req,res){
  admin_name=req.body.admin

  form_name=req.params.title

  get_forms_questions(admin_name,form_name).then((result)=>{
         console.log(result)
         res.send(result)
  })


}


async function user_fill_form(req,res){
    form_name=req.params.form_name
    console.log(form_name)
    admin_name=req.body.admin;

    users_ans=req.body
    save_form_answer(admin_name,form_name,users_ans).then((result)=>{
        console.log(result)
        res.send("your answers has been saved successfully !")
    })
  


    //save answers
}

module.exports={user_get_questions,user_fill_form}