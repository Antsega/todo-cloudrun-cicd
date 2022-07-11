const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

// app.set('views', path.join(_dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/" , function(req,res){
    res.render("index")
})

app.listen(port, function(){
    console.log("server started on port 3000");
})
