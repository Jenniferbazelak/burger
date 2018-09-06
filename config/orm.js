// Import MySQL connection.
var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
      var value = ob[key];
      
      if (Object.hasOwnProperty.call(ob, key)) {
      
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


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

    updateOne: function (table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVal) + " WHERE " + condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}







module.exports = orm;