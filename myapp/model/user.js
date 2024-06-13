/*var express = require('express');
var router = express.Router();*/

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/userslist', function (req, res, next) {
  result=userModel.readall(function(result){
    res.render('usersList', { title: 'List des utilisateurs', users:result});
  });
});
*/
var db = require('./db.js');

module.exports = {
    read: function (id_utilisateur, callback) {
        db.query("select * from utilisateur where id_utilisateur= ?",id_utilisateur, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    readall: function (callback) {
        db.query("select * from utilisateur", function (err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    areValid: function (email, password, callback) {
        sql = "SELECT mot_de_passe FROM USERS WHERE email = ?";
        rows = db.query(sql, email, function (err, results) {
            if (err) throw err;
            if (rows.length == 1 && rows[0].mot_de_passe === password) {
                callback(true)
            } else {
                callback(false);
            }
        });
    },
    create: function (id_utilisateur, nom, prenom, telephone, email, date_creation, statut_compte, mot_de_passe, callback) {
        sql = "INSERT INTO utilisateur  values(?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, id_utilisateur, nom, prenom, telephone, email, date_creation, statut_compte, mot_de_passe, function(err, results) {
            if (err) throw err;
            callback(results);
        });
        return false;
    }, 
    update: function(column, value, callback) {
        sql = "UPDATE utilisateur SET ? = ?";
        db.query(sql, column, value, function(err, results) {
            if (err) throw err;
            callback(results);
        }); 
    },
    delete: function(id, callback) {
        sql = "DELETE FROM utilisateur WHERE id_utilisateur = ?";
        db.query(sql, id, function(err, results){
            if (err) throw err;
            callback(results);
        })
    }
}
