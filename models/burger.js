var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        console.log("inside burger file")
        orm.all("burgers", function (res) {
            console.log("inside burger callback")
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;
