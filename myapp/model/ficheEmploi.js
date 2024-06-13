var db = require('./db.js');

module.exports = {
    read: function (id_fiche_de_poste, callback) {
        db.query("select * from FicheDePoste where id_fiche_de_poste= ?", id_fiche_de_poste, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    readall: function (callback) {
        db.query("select * from FicheDePoste", function (err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    create: function (id_fiche_de_poste, id_organisation, intitule, statut_poste, responsable_hierarchique, type_metier, lieu_mission, rythme, fourchette_salaire, description, callback) {
        sql = "INSERT INTO FicheDePoste values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, id_fiche_de_poste, id_organisation, intitule, statut_poste, responsable_hierarchique, type_metier, lieu_mission, rythme, fourchette_salaire, description, function(err, results) {
            if (err) throw err;
            callback(results);
        });
        return false;
    }, 
    update: function(column, value, callback) {
        sql = "UPDATE FicheDePoste SET ? = ?";
        db.query(sql, column, value, function(err, results) {
            if (err) throw err;
            callback(results);
        }); 
    },
    delete: function(id, callback) {
        sql = "DELETE FROM FicheDePoste WHERE id_fiche_de_poste = ?";
        db.query(sql, id, function(err, results){
            if (err) throw err;
            callback(results);
        })
    }
}
