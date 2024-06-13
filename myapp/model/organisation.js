var db = require('./db.js');

module.exports = {
    read: function (siren, callback) {
        db.query("select * from Organisation where siren= ?", siren, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    read_non_checked: function (siren, callback) {
        db.query("select * from Organisation where verifie = 0", siren, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    }, 
    readall: function (callback) {
        db.query("select * from Organisation", function (err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    create: function (siren, type, nom, siege_social, callback) {
        sql = "INSERT INTO Organisation  values(?, ?, ?, ?)";
        db.query(sql, siren, type, nom, siege_social, function(err, results) {
            if (err) throw err;
            callback(results);
        });
        return false;
    }, 
    update: function(column, value, callback) {
        sql = "UPDATE Organisation SET ? = ?";
        db.query(sql, column, value, function(err, results) {
            if (err) throw err;
            callback(results);
        }); 
    },
    delete: function(id, callback) {
        sql = "DELETE FROM Organisation WHERE siren = ?";
        db.query(sql, id, function(err, results){
            if (err) throw err;
            callback(results);
        })
    }
}
