const mongoose=require("mongoose");
mongoose.set("strictQuery",false)
myconnections={}
function create_database(user_name){
 myconnections[user_name]=mongoose.connect("mongodb://localhost:27017/"+user_name).then((e)=>{

 console.log(e)
 })
 
};


create_database("admin_3")


mycollections={}
