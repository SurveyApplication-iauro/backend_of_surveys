const express=require("express");
const adminRoutes=require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const cors=require('cors')

const app = express();


app.use(cors())
app.use(express.json());

app.use("/",adminRoutes)

app.use("/user",userRoutes)



app.listen(7600)