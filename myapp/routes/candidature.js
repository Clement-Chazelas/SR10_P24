var express = require('express');
var router = express.Router();
const candidatureModel= require("../model/candidature")

router.get('/', function (req, res, next) {
  result=candidatureModel.readall(function(result){
    res.render('ListeCandidatures', { title: 'Liste des candidatures', candidatures: result });
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.post('/candidatures', function (req, res, next) {
/*récupérer les données passées via le body de la requête post :
Exemple :
 const user_fname = req.body.fname;
 const user_lname = req.body.lname;
*/

//utiliser le model pour enregistrer les données récupérées dans la BD

});



module.exports = router;

