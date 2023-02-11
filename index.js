const express=require("express");
const adminRoutes=require("./routes/adminRoutes")


const app = express();



app.use(express.json());

app.use("/",adminRoutes)





app.listen(7600)