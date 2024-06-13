var mysql = require("mysql");
var pool = mysql.createPool({
host: "tuxa.sme.utc", //ou localhost
user: "sr10p059",
password: "rp88Hu0IS6uP",
database: "sr10p059"
});

module.exports = pool;
