var express = require('express');
var router = express.Router();
const userModel= require("../model/utilisateur")
const pool = require('../model/db')
const app = require('../app');
const session = require('../model/session');
//const { csrfProtection } = require('../app');


router.get('/', function (req, res, next) {
  result=userModel.readall(function(result){
    res.render('ListeUtilisateurs', { title: 'Liste des utilisateurs', users: result });
  });
});


//initialisation
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/',/* app.csrfProtection,*/ function (req, res, next) {
//utiliser le model pour enregistrer les données récupérées dans la BD


// Récupérer les données envoyées par le formulaire
    const { Nom, Prenom, Email, Password } = req.body;



    // Vérifier si l'e-mail existe déjà
    const checkEmailSql = "SELECT * FROM utilisateur WHERE email = ?";
    pool.query(checkEmailSql, [Email], (err, results) => {
        if (err) {
            console.error('Erreur lors de la vérification de l\'e-mail dans la base de données :', err);
            return res.redirect('/error?message=Erreur+de+base+de+données');
        }

        if (results.length > 0) {
            // Si l'e-mail existe déjà, retourner une erreur
            return res.send('Un utilisateur avec cette adresse mail existe déjà');
        }

        // Si l'e-mail n'existe pas, insérer le nouvel utilisateur
        const insertUserSql = "INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, statut_compte) VALUES (?, ?, ?, ?, ?)";
        const values = [Nom, Prenom, Email, Password, "candidat"];

        pool.query(insertUserSql, values, (err, result) => {
            if (err) {
                console.error('Erreur lors de l\'enregistrement de l\'utilisateur dans la base de données :', err);
                res.status(500).send('Erreur lors de la creation de l\'utilisateur');
		return;
            }
            console.log('Utilisateur créé avec succès');
            res.send('Utilisateur créé avec succès');
        });
    });

});


// session
/*router.post('/login', /*csrfProtection,*//* (req, res) => {
  const  Email = req.body.Email;
  const  Password = req.body.Password;

  // Vérification des informations d'identification de l'utilisateur
  const checkUserSql = "SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ?";
  pool.query(checkUserSql, [Email, Password], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification des informations d\'identification :', err);
      return res.status(500).send('Erreur de base de données');
    }

    if (results.length > 0) {
      // Création d'une session utilisateur
      console.log(Email);
      req.session.user= Email;
      req.session.role = 'user';  // Assigne un rôle par défaut

      res.send('Authentification réussie !');
    } else {
      res.send('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  });
});*/




router.post('/login', (req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;

  // Vérification des informations d'identification de l'utilisateur
  const checkUserSql = "SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ?";
  pool.query(checkUserSql, [Email, Password], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification des informations d\'identification :', err);
      return res.status(500).send('Erreur de base de données');
    }

    if (results.length > 0) {
      const user = results[0];
      const statutCompte = user.statut_compte;

      // Création d'une session utilisateur
      console.log(Email);
      req.session.user = Email;
      req.session.role = statutCompte;  // Assigne le rôle basé sur le statut_compte

      // Redirection en fonction du rôle de l'utilisateur
      if (statutCompte === 'candidat') {
        res.redirect('/accueil/candidat/'+ user.id_utilisateur.toString());
      } else if (statutCompte === 'administrateur') {
        res.redirect('/accueil/admin/' + user.id_utilisateur.toString());
      } else if (statutCompte === 'recruteur') {
        res.redirect('/accueil/recruteur/'+ user.id_utilisateur.toString());
      } else {
        res.send('Rôle utilisateur non reconnu.');
      }
    } else {
      res.send('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  });
});




router.get('/profil', (req, res) => {
  if (req.session.user) {
    res.send('Bienvenue sur votre profil, ' + req.session.user + '!');
  } else {
    res.redirect('/login');
  }
});


router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la déconnexion');
    } else {
      res.redirect('/login');
    }
  });
});

module.exports = router;
