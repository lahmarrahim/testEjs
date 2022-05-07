// exo 3 ejs // node exo3ejs.js
var express = require("express");
var app = express();
// var bodyParser=require("body-parser");
// var bp=bodyParser.urlencoded({extended:false});
var mongoose=require ("mongoose");
console.log("version: "+mongoose.version);
var db=mongoose.connect("mongodb://localhost:27017/maBase");

var monSchema=mongoose.Schema({
	login: String,
	pwd: String
});

var utilisateur = mongoose.model("utilisateur", monSchema);
console.log(utilisateur);

app.get("/ajouter", function(req,res){
	var u1= new utilisateur({login: "u1", pwd:"123"});
	u1.save();
	res.redirect("/utilisateurs");
});

app.get("/utilisateurs", function(req,res){
	utilisateur.find().then (function (users){
	res.json(users)
	});
});

// list=[{login:"user1",pwd:"123"}];

// app.get("/utilisateurs",function(req,res){
//     res.render("users.ejs",{u:list});
// });

// app.get("/formAjout",function(req,res){
//     res.render("ajouter.ejs",);
// });

// app.post("/ajouter",bp,function(req,res){
// 	var login=req.body.login;
// 	var pwd=req.body.pwd;
// 	list.push({login:login,pwd:pwd});
// 	res.redirect("/utilisateurs");
// });

app.listen(3001);
console.log("serveur lancé sur le port 3001");
// http://localhost:3001/utilisateurs