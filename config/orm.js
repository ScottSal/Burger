//importing connection
var connection = require("./connection");
//create object with methods that collects data, creates new data, updates data
//orm.all method: 
//creates connection query that is selecting everything from table input 
//then uses callback to pass result into .js
//add in update method: 
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' +tableInput+ ';',
            function(err,result){
            if(err) throw err;
            cb(result);
        })
    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';', function(err,result) {
            if(err) throw(err);
            cb(result);
        })
    },
    create: function(tableInput, val, cb){
        connection.query('INSERT INTO ' +tableInput+' (burger_name) VALUES ("'+val+'");', function(err,result) {
            if(err) throw(err);
            cb(result);
        })
    }
} 

module.exports = orm;