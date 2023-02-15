
const mysql=require("../db_controls/sql_control")

//jwt token
const jwt = require("jsonwebtoken");
const jwt_key = "survey"

// crypto setup -----

const crypto = require("crypto");
const mongo_authentication = require("../db_controls/auth_mongo_db");
const algorithm = 'aes-192-cbc';
const iv = Buffer.alloc(16, 0);
const password = 'bncaskdbvasbvlaslslasfhj';
const key = crypto.scryptSync(password, 'GfG', 24);



const user_reg = function (req, res) {

    
    const pass_main = req.body.password;
   
    // Creating cipher
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // Declaring encrypted
    let encrypted = '';

    // Reading data
    cipher.on('readable', () => {
        let chunk;
        while (null !== (chunk = cipher.read())) {
            encrypted += chunk.toString('base64');
        }
    });

    // Handling end event
    cipher.on('end', () => {
        console.log(encrypted);
    });

    // Writing data
    cipher.write(pass_main);
    cipher.end();

    // mysql.save(req.body.username,req.body.email_id, encrypted).then(() => {

    //     res.status(200).json({message:"save succussfully pass and user name...."})
    // }).catch((e) => {
    //     console.log(e);
    //     res.send("you not entered data correctly....!!!!!!!!")
    // });
 
    auth_document={
        user_name:req.body.username,
        email:req.body.email_id,
        password:encrypted,
        token:""
    }
     
    mongo_authentication.save_authentication("admin_auth","authentication",auth_document).then((result)=>{
        res.status(200).json({message:"save succussfully pass and user name...."})
    }).catch((e) => {
            console.log(e);
            res.send("you not entered data correctly....!!!!!!!!")
    })
}

module.exports=user_reg;