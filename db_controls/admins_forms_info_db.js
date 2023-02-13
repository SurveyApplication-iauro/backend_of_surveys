
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function save_admin_form_info(collection_name, form_name) {
    
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("admins_forms_info");
    var document={Form_name:form_name}
    dbo.collection(collection_name).insertOne(document, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  })
   

}






 function get_admins_form_info(collection_name) {
  console.log("assdf");

  return MongoClient.connect(url).then(( db)=> {
   
    var dbo = db.db("admins_forms_info");
    var query = {_id:0,Form_name:1};
    return dbo.collection(collection_name).find().project(query).toArray().then((result)=>{
    
      //var data=convert_json_obj_arr_to_array(result,"Form_name")
       db.close();
       console.log(result);
       return result;
      
      
    });
    
  })
  // .then((result)=>{
  //     // console.log(result);
  //      return result;
  // });
}
// save_admin_form_info("pratik","form_101");

// get_admins_form_info("pratiks").then((result)=>{
//     console.log(result)
// })

module.exports = { save_admin_form_info, get_admins_form_info };





//var connection = mongoose.connection;
  // connection.on('error', console.error.bind(console, 'connection error:'));
  // connection.once('open', function () {
  
  //     connection.db.collection(admin_name, function(err, collection){
  //         collection.find().then((result) => {
  //             mongoose.connection.close()
  //             //Model=null;
  //             return result;
          
  //           });
  //     });
  
  // });