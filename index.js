const express=require("express");
const adminRoutes=require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();



app.use(express.json());

app.use("/",adminRoutes)

app.use("/user",userRoutes)



app.listen(7600)