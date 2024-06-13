var db = require('./db.js');

module.exports = {
    read: function (id_offre, callback) {
        db.query("select * from OffreEmploi where id_offre= ?", id_offre, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_infos: function (id_offre, callback) {
        db.query("select * from OffreEmploi oe JOIN FicheDePoste fp ON oe.id_fiche_offre = fp.id_fiche_de_poste JOIN Organisation o ON o.siren = fp.siren_organisation WHERE id_offre= ?", id_offre, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_info_from_user: function(id_recruteur, callback) {
        db.query("select * from OffreEmploi oe JOIN FicheDePoste fp ON oe.id_fiche_offre = fp.id_fiche_de_poste JOIN Organisation o ON fp.siren_organisation = o.siren WHERE id_recruteur= ?", id_recruteur, function(err, results) {
            if (err) throw err; 
            callback(results);
        });
    },
    read_from_user: function(id_recruteur, callback) {
        db.query("select * from OffreEmploi where id_recruteur= ?", id_recruteur, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    readall: function (callback ) {
        db.query("select * from OffreEmploi", function (err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    create: function (id_offre, id_fiche_poste, etat, date_validite, pieces_demandes, nb_pieces_demandes, callback) {
        sql = "INSERT INTO OffreEmploi values(?, ?, ?, ?, ?, ?)";
        db.query(sql, id_offre, id_fiche_poste, etat, date_validite, pieces_demandes, nb_pieces_demandes, function(err, results) {
            if (err) throw err;
            callback(results);
        });
        return false;
    }, 
    update: function(column, value, callback) {
        sql = "UPDATE OffreEmploi SET ? = ?";
        db.query(sql, column, value, function(err, results) {
            if (err) throw err;
            callback(results);
        }); 
    },
    delete: function(id, callback) {
        sql = "DELETE FROM OffreEmploi WHERE id_offre = ?";
        db.query(sql, id, function(err, results){
            if (err) throw err;
            callback(results);
        })
    }
}
