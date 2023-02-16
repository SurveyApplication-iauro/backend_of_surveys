const create_form = require("../controllers/create_form_control");
const user_login_control = require("../controllers/loginControl");
const show_my_forms = require("../controllers/show_my_forms_control");
const user_reg_control = require("../controllers/signupControl");
const auth = require("../middlewares/auth");

const adminRoutes=require("express").Router()

adminRoutes.post("/reg",user_reg_control);
adminRoutes.post("/login",user_login_control);
adminRoutes.post("/create_form",auth,create_form);
adminRoutes.get("/show_my_forms",auth,show_my_forms)
//adminRoutes.put("/editForm",auth,)

module.exports=adminRoutes;