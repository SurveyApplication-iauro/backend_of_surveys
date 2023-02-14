

const mongo_authentication = require("../db_controls/auth_mongo_db");
//const mysql=require("../db_controls/sql_control")

//jwt token
const jwt = require("jsonwebtoken");
const jwt_key = "survey"

// crypto setup -----

const crypto = require("crypto");
const algorithm = 'aes-192-cbc';
const iv = Buffer.alloc(16, 0);
const password = 'bncaskdbvasbvlaslslasfhj';
const key = crypto.scryptSync(password, 'GfG', 24);

const user_login = (req, res) => {

    console.log("enter in login ")


    // checking username in  mysql database ------

    mongo_authentication.get_particular_user(req.body.username).then((result) => {

        // making data model for jwt token to used -----
        

        var data = {

            user_name: result[0].user_name,
            password: result[0].password
        }




        // creating decryption model --------

        const decipher =
            crypto.createDecipheriv(algorithm, key, iv);


        // Declaring decrypted
        let decrypted = '';

        // Reading data
        decipher.on('readable', () => {
            let chunk;
            while (null !== (chunk = decipher.read())) {
                decrypted += chunk.toString('utf8');
            }
        });

        // Handling end event
        decipher.on('end', () => {
            console.log(decrypted);
        });

        // Encrypted data which is to be decrypted
        const encrypted = data.password;

        decipher.write(encrypted, 'base64');      // inserting pssword for decryption 
        decipher.end();



        if (decrypted == req.body.password) {
            console.log("enter in if statement")

            // generating  jwt token --------

            jwt.sign({ data }, jwt_key, (err, token) => {
                console.log(data)
                mongo_authentication.insert_token(token, data.user_name);   // inserting token in mysql server
                res.status(200).json(
                    token);
            })

        }
        else {

            res.status(401).json({"message":"wrong password entered..!!!!!",
        "success":0})
            console.log("wrong password entered...")
        }



    }).catch(() => {

        res.status(401).json({"message":"username is not correct entered....!!!!!!"})
        console.log("username is not correct entered....")
    })

}




module.exports = user_login