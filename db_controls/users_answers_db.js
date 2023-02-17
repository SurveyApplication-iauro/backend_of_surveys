
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function get_forms_questions(db_name,collection_name) {
    console.log("Enter in get question");
  
    return MongoClient.connect(url).then(( db)=> {
     
      var dbo = db.db(db_name);
      //var query = {};
    //  return dbo.collection(collection_name).find().project(query).toArray().then((result)=>{
        return dbo.collection(collection_name).findOne().then((result)=>{
      
        //var data=convert_json_obj_arr_to_array(result,"Form_name")
         db.close();
         console.log(result);
         return result;
        
        
      });
      
    })
}

//get_forms_questions("pratik","form_1");


function save_form_answer(db_name,collection_name,ans_doc){

    console.log("Enter in saving answers",db_name,collection_name,ans_doc);
  
    return MongoClient.connect(url).then(( db)=> {
     
      var dbo = db.db(db_name);
      
        return dbo.collection(collection_name).insertOne(ans_doc).then((result)=>{
      
         db.close();
         //console.log(result);
         return result;
        
        
      });
      
    })



}

//get responses............................
function get_form_responses(db_name,collection_name){
  console.log("Enter in get form responses")
  return MongoClient.connect(url).then(( db)=> {
     
    var dbo = db.db(db_name);
     
  
      return dbo.collection(collection_name).find().toArray().then((result)=>{

        db.close();
        console.log(result);
        return result;

      }) 
    
      //var data=convert_json_obj_arr_to_array(result,"Form_name")
      
      
  
    
  })

}
//get_form_responses("night","Night lyyf title")


//save_form_answer("pratik","form_1",{q1:"Vaibhav",q2:"khandare"})

module.exports={get_forms_questions,save_form_answer,get_form_responses}