const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();

var corsOptions = {
  origin:''

}; 

const account = require("./routes/account");
const courses = require("./routes/courses");

const port = 8080;
app.use(express.json());
//app.use(cors({origin:'https://g-riend-gamer-app.vercel.app',methods:['GET', 'POST','PUT','DELETE','PATCH','OPTIONS'],credentials:true}));
//app.use(cors({origin:'http://localhost:4200',methods:['GET', 'POST','PUT','DELETE','PATCH'],credentials:true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

app.get('/',(req,res)=>{
  res.send('<div style="width: 100%; height:100vh; display:flex; flex-direction:column;gap:1rem ; justify-content:center; place-items:center;"> <div style="width:100px; height:100px; background-color: green; border-radius:50%"></div><h1 style="font-family:sans-serif;padding:0;margin:0;"> Server is running</h1> <p style="padding:0;margin:0;font-family:sans-serif;">Ready to take your requests</p></div>');
})

app.use("/account", account);
app.use("/courses", courses);


app.listen(port, () => {
  console.log("Server running on port 8080");
});
