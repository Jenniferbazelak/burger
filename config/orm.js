// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, col, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + col + ") " + "VALUES (" + vals + ")";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, col, condition, id, cb) {
        var queryString = "UPDATE " + table + " SET " + col + " = " + condition + " WHERE id= " + id + '"';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}







module.exports = orm;