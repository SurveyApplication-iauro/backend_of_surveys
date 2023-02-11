const create_form = require("../controllers/create_form_control");
const user_login_control = require("../controllers/loginControl");
const user_reg_control = require("../controllers/signupControl");
const auth = require("../middlewares/auth");

const adminRoutes=require("express").Router()

adminRoutes.post("/reg",user_reg_control);
adminRoutes.post("/login",user_login_control);
adminRoutes.post("/createForm",create_form);
// adminRoutes.get("/showForm",auth,)
// adminRoutes.put("/editForm",auth,)

module.exports=adminRoutes;