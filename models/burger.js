var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    
    create: function(table, cols, vals, cb) {
      orm.insertOne(table, cols, vals, function(res) {
        cb(res);
      });
    },

    update: function(table, col, condition, id, cb) {
      orm.updateAll(table, col, condition, id, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;