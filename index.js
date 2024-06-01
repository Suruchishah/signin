require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./configure/connect");
//const User = require("./models/signnn");
const PORT=process.env.PORT || 5000;
const product_routes = require("./routes/sign")
app.post("/register",(req,resp) => {
    resp.send("hello");

});
app.use("/api/signin",product_routes);
const start= async() => {
  try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT , () => {
      console.log('${PORT} Yes, I am connected');
  });
}catch (error){
  console.log(error);
}

};
start();
