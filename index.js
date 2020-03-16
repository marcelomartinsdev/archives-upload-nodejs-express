const express = require("express");
const app = express();
const multer = require('multer');


app.set('view engine','ejs');

const upload = multer({dest: "uploads/"}) // multer basic configuration (multer it's a middleware!)


app.get("/",(req,res) => { 
  res.render("index");
})

app.post("/upload",upload.single("file"),(req,res) => { //make archive upload with multer to uploads folder through "file" button
    res.send("Archive received!!");
})

app.listen(8080,() =>{
    console.log("Server is RUNNING!!");
});