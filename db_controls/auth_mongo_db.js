var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb+srv://krishna1311:131120@cluster0.wsew2wf.mongodb.net/?retryWrites=true&w=majority";
var url = "mongodb://localhost:27017/";


function save_authentication(db_name,collection_name,ans_doc){

    console.log("Enter in saving username auth");
  
    return MongoClient.connect(url).then(( db)=> {
     console.log("inside the mongoclient")
      var dbo = db.db(db_name);
      
        return dbo.collection(collection_name).insertOne(ans_doc).then((result)=>{
      
         db.close();
         console.log(result);
         return result;
        
        
      });
    })
}

function get_particular_user(User_name){
  
    
        console.log("Enter in the get user_name");
      
        return MongoClient.connect(url).then(( db)=> {
         
          var dbo = db.db("admin_auth");
          //var query = {_id:0,user_name:User_name,password:1};
          return dbo.collection("authentication").findOne({user_name:User_name}).then((result)=>{
          
            //var data=convert_json_obj_arr_to_array(result,"Form_name")
             db.close();
             console.log(result)
            //  console.log(result[0].username);
            //  console.log(result[0].password);
             return result;
            
            
          });
          
        })

    

}

function insert_token(token,user_name){
    console.log("Enter in saving token");
  
    return MongoClient.connect(url).then(( db)=> {
     
      var dbo = db.db("admin_auth");
      var myquery = { user_name:user_name};
      var newvalues = { $set: {token:token } };
        return dbo.collection("auth").updateOne(myquery,newvalues).then((result)=>{
      
         db.close();
         console.log(result);
         return result;
        
        
      });
    })

}

// get_particular_user("rohan")

module.exports={save_authentication,get_particular_user,insert_token};