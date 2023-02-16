const jwt = require("jsonwebtoken");
const SECRET_KEY = "survey";

const auth = (req, resp, next) => {
  try {
    console.log(req.headers)
    let token = req.headers.authorization;
    console.log(token);
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      data= user.data;
      req.user_name=data.user_name
      console.log(req.user_name)
      
    } else {
      resp.status(400).json({ message: "Unauthorized User" });
    }
    next();
  } catch (error) {
    console.log("Unauthorized User");
    resp.status(400).json({ message: "Unauthorized User" });
  }
};

module.exports = auth;
