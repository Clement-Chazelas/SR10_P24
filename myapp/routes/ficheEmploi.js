var express = require('express');
var router = express.Router();
const ficheEmploiModel= require("../model/ficheEmploi")

router.get('/', function (req, res, next) {
  result=ficheEmploiModel.readall(function(result){
    res.render('ListeFichesEmplois', { title: 'Liste des fiches d\'emplois', fichesEmplois: result });
  });
});

//initialisation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.post('/fichesEmplois', function (req, res, next) {
/*récupérer les données passées via le body de la requête post :
Exemple :
 const user_fname = req.body.fname;
 const user_lname = req.body.lname;
*/

//utiliser le model pour enregistrer les données récupérées dans la BD

});



module.exports = router;
