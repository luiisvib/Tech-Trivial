var express = require('express');
var router = express.Router();
var api = require("./api")

var inicio = 0
var array_resultados = []

/* GET home page. */

router.get('/', function(req, res, next) {
  inicio = 0
  array_resultados = []
  res.render('inicio', { title: 'Tech Trivial'});
});

router.get('/index', function(req, res, next) {
  inicio = 0
  array_resultados = []
  res.render('index', { title: 'Tech Trivial' , datos: api[inicio]});
});

router.get("/siguiente", (req,res) =>{
  if (inicio < api.length-1){
    inicio = inicio +1
  }else{
    res.render('resultado', { title: 'Tech Trivial' , datos: api, datos_resultados: array_resultados});
  }

  res.render('index', { title: 'Tech Trivial' , datos: api[inicio]});
})

router.get("/comprobar/:opcion", (req,res) =>{
  var {opcion} = req.params
  if (opcion == "false"){
    array_resultados.push("No contestada")
  }else{
    array_resultados.push(opcion)
  }
  console.log(array_resultados)
  res.redirect("/siguiente")
})

module.exports = router;
