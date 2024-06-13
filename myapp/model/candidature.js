var db = require('./db.js');

module.exports = {
    read: function (id_candidature, callback) {
        db.query("select * from Candidature where id_offre= ?",id_candidature, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_infos_candidature: function (id_candidature, callback) {
        db.query("select pieces_dossier, pieces_demandees, nb_pieces_demandes, intitule, statut_poste, responsable_hierarchique, type_metier, lieu_mission, rythme, fourchette_salaire, description, o.nom, prenom AS prenom_user, telephone, email, u.nom AS nom_user from Candidature c JOIN OffreEmploi oe ON c.id_offre = oe.id_offre Join FicheDePoste fp ON fp.id_fiche_de_poste = oe.id_fiche_offre JOIN Organisation o ON fp.siren_organisation = o.siren JOIN utilisateur u ON u.id_utilisateur = c.id_utilisateur WHERE c.id_candidature= ?",id_candidature, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_user: function (id_offre, callback) {
        db.query("SELECT * from Candidature c JOIN utilisateur u ON c.id_utilisateur = u.id_utilisateur WHERE id_offre = ?", id_offre, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_from_user: function (id_utilisateur, callback){
        db.query("select * from Candidature where id_utilisateur= ?", id_utilisateur, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_infos_from_user: function (id_utilisateur, callback) {
        db.query("SELECT * from Candidature c INNER JOIN OffreEmploi oe ON c.id_offre = oe.id_offre INNER JOIN FicheDePoste fp ON oe.id_fiche_offre = fp.id_fiche_de_poste WHERE c.id_utilisateur = ?", id_utilisateur, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    readall: function (callback) {
        db.query("select * from Candidature", function (err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    create: function (id_candidature, id_utilisateur, id_offre, date_candidature, pieces_dossier, callback) {
        sql = "INSERT INTO Candidature values(?, ?, ?, ?, ?)";
        db.query(sql, id_candidature, id_utilisateur, id_offre, date_candidature, pieces_dossier, function(err, results) {
            if (err) throw err;
            callback(results);
        });
        return false;
    }, 
    update: function(column, value, callback) {
        sql = "UPDATE Candidature SET ? = ?";
        db.query(sql, column, value, function(err, results) {
            if (err) throw err;
            callback(results);
        }); 
    },
    delete: function(id, callback) {
        sql = "DELETE FROM Candidature WHERE id_candidature = ?";
        db.query(sql, id, function(err, results){
            if (err) throw err;
            callback(results);
        })
    }
}
