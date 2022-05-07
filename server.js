// Routage simple // node server.js
// var express = require("express");
// var app=express();

// app.get("/", function(req,res){
//     res.send("<h1>Home</h1>")
// })

// app.get("/file", function(req,res){
//     res.sendFile(__dirname+"/public/index.html") //__dirname : tjib path te3 myNodeApp
// })

// app.get("/etudiant/:id",function(req,res){
//     res.send(("Etudiant numéro "+ req.params.id))
// })

// app.get("*",function(req,res){
//     res.send(("Route not found "+ req.url))
// })

// app.listen(3000);
// console.log("serveur démarrer sur le port 3000");

// Routage avancé // node main.js
// var express = require("express");
// var app=express();
// var router=express.Router();

// router.get("/inscription",function(req,res){
//     res.send("Inscription");
// })

// module.exports=router;

// Send des images ou des styles css
// var express = require("express");
// var app=express();

// app.use("/css",express.static(__dirname+"/public"))

// app.get("/",function(req,res){
//     res.send("<h1>Style css</h1> <img src='/css/fond.jpeg' />");
// })

// app.listen(3000);
// console.log("serveur démarrer sur le port 3000");

//Créer et appeler des vues EJS
// var express = require("express");
// var app = express();

// app.set('views',__dirname+'/views');
// app.set('view engine','ejs');

// app.get("/personne", function (req,res){
//     res.render("pers.ejs");
// })

// app.get("/personne/:id", function (req,res){
//     res.render("pers.ejs",{p: req.params.id});
// })


// app.listen(3000);
// console.log("Serveur lancé sur le port 3000")


