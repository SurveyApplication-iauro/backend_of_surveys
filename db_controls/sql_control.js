
const mysql=require("mysql2")


connection=mysql.createConnection(
   {
    host:"localhost",
    user:"root",
    password:"Krrish@123",
    database:"auth"
   } 
)

connection.connect((err, result) => {
    if (err) {
        console.log(err);
    }
    else console.log("connected to sql ")
})

// 


async function save(user_name,email_id, password) {

    console.log("enter in save")

    const result = connection.promise().query(`insert into admin(user_name,email_id,password) value(?,?,?)`, [user_name,email_id,password]

        

    )
    return result;
}



async function get_perticular_User(user_name) {


    const result = await connection.promise().query(`select * from admin where user_name = ?`, [user_name]

    )

    return result[0];




}

async function insert_token(Token,user_name){

    connection.query(`update admin set token=? where user_name=?`,[Token,user_name],
    
    
    
    (err,data)=>{

        if(err){

            console.log(err);
        }
        else{

            console.log("saved token.....");
        }
    }
    )
}






// // async function get_user_token (user_name){

// //     const result =await connection.promise().query(`select token from `)


// // }

// async function update_password(update_password,user_name){

//     connection.query(`update password_token set password=? where user_name=?`,[update_password,user_name],
    
    
    
//     (err,data)=>{

//         if(err){

//             console.log(err);
//         }
//         else{

//             console.log("updated password.....");
//         }
//     }
//     )
// }
//async function get_tables() {

    //     connection.query("select * from password_token", function (err, table) {
    
    //         if (err) {
    
    //             console.log("error:", err);
    //         }
    //         else {
    //             console.log("table:", table);
    //         }
    //     });
    //     // console.log(result);
    // }
    
    

// // get_tables();
// // get_perticular_User("happy")

// // insert_data("happy","EB2MVb8d0TjvjNj+iq5lfg==","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzZGI5ZjNhM2U5ZmYwOWYyMjg5OTdmMCIsInJvbGUiOiJhZG1pbiIsIm5hbWUiOiJqZGtsamQiLCJ1c2VybmFtZSI6Impna2xkbGZrbHNqZiIsInBhc3N3b3JkIjoiRUIyTVZiOGQwVGp2ak5qK2lxNWxmZz09IiwiX192IjowfSwiaWF0IjoxNjc1NDA0NDA4fQ.SO-y7ugpsX3ea7DKDczCsE0BAEXxjCzI2T7zBMuyKoQ");

module.exports = { save ,get_perticular_User,insert_token}