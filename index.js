const express = require("express");
const app = express();
const multer = require('multer');


app.set('view engine','ejs');



const storage = multer.diskStorage({ // allow archive manipulation after upload
    destination: function(req, file, cb){
        cb(null,"uploads/")
    },
    filename: function(req, file, cb) { // save archive with original name and extension
        cb(null, file.originalname);
    }
}) 



const upload = multer({storage}) // multer basic configuration (multer it's a middleware!)

app.get("/",(req,res) => { 
  res.render("index");
})

app.post("/upload",upload.single("file"),(req,res) => { //make archive upload with multer to uploads folder through "file" button
    res.send("Archive received!!");
})

app.listen(8080,() =>{
    console.log("Server is RUNNING!!");
});