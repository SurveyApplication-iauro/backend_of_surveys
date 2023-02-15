const users_data = require("../controllers/user_fill_form_control");

const userRoutes=require("express").Router();


userRoutes.get("/get_form/:admin/:title",users_data.user_get_questions)

userRoutes.post("/fill_form/:form_name",users_data.user_fill_form)

module.exports=userRoutes;