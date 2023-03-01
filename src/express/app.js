const express = require("express");
const app = express();
const axios = require("axios");

axios.get("http://localhost:6000/").then((res) => {
  console.log(res.data);
});

app.listen(6000, () => {
  console.log("App listening on port 6000");
});

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("Connected successfuly");
});



app.post('/',(req,res)=> {
    const { email,password }= req.body;
    const LoginData= {email, password};
    if (LoginData) {
      console.log('Login successful')
    }
    else console.log('Authentication failed')

})