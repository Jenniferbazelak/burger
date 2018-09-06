var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    update: function(objColVal, condition, cb) {
      orm.updateAll("burgers", objColVal, condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;