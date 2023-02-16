const { get_forms_questions, save_form_answer } = require("../db_controls/users_answers_db")

// the below function will provide questions to the user so that user can answer the questions


async function user_get_questions(req,res){

  admin_name=req.params.admin

  form_name=req.params.title

  get_forms_questions(admin_name,form_name).then((result)=>{
         console.log(result)

         var document=[]
         for(let i in result){
          if(i!="_id"){ 
          document.push(result[i])
        }
         }
         console.log(document)
         res.json(document)
  })


}


async function user_fill_form(req,res){

    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiii")
  form_name=req.params.form_name
    console.log("form name",form_name)
    admin_name=req.params.admin_name
   console.log("admin_name",admin_name)
    document={type:"answers",
                
              user_name:"krrish"
  
  
             };
    k=0;
    for(i of req.body){
       Object.assign(document,{["q"+k]:i})
       k++;
    }
console.log(document)
    users_ans=req.body
    save_form_answer(admin_name,form_name,document).then((result)=>{
   

        console.log(result)
        res.send("your answers has been saved successfully !")
    })
  


    //save answers
}

module.exports={user_get_questions,user_fill_form}