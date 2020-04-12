var sqlite3 = require('sqlite3').verbose();
var file = 'essentials.db';
var db = new sqlite3.Database(file);

const status_list = ["0", "1", "2", "3"];

exports.allItemsQuery = function (callback) {

    db.all("SELECT store_id, item_code, category_code, name, status, last_updated FROM item_states", function(err, rows) {
        callback(err, rows);
    });
};


exports.allCategoriesQuery = function (callback) {

    db.all("SELECT category_code, name, status FROM item_category", function(err, rows) {
        callback(err, rows);
    });
};

exports.updateItem = function (item, callback) {

    var sql = 'UPDATE item_states set status = "' + item.status + '", last_updated = "' + item.last_updated + '" where item_code = "' + item.item_code + '"';

    db.all(sql, function(err, rows) {
        callback(err, rows);
    });
};
