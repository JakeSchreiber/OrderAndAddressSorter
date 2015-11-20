var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');


var connectionString=process.env.DATABASE_URL || 'postgres://localhost:5432/sql_lecture2';


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));

router.get('/addresses', function(req, res){
    var results=[];

    pg.connect(connectionString, function(err, client, next){
        var query = client.query("SELECT users.name, address_type, address_street, address_city, address_state, address_zip FROM addresses JOIN users ON users.id = addresses.user_id");
        query.on('row', function(row){
            results.push(row);
        });

        query.on('end', function(){
            client.end();
            return res.json(results);
        });

        if(err) console.log(err);

    })
});

router.get('/orders', function(req, res){
    var results=[];

    pg.connect(connectionString, function(err, client, next){
        var query = client.query("SELECT users.name, address_type, address_street, address_city, address_state, address_zip, orders.amount, orders.order_date::date FROM orders JOIN addresses ON addresses.address_id = orders.ship_address_id JOIN users ON users.id = orders.user_id");
        query.on('row', function(row){
            results.push(row);
        });

        query.on('end', function(){
            client.end();
            return res.json(results);
        });

        if(err) console.log(err);

    })
});

router.get('/people', function(req, res){
    var results=[];

    pg.connect(connectionString, function(err, client, next){
        var query = client.query("SELECT * FROM users");
        query.on('row', function(row){
            results.push(row);
        });

        query.on('end', function(){
            client.end();
            return res.json(results);
        });

        if(err) console.log(err);

    })
});

router.get('/*', function(req, res, next){
    var file = req.params[0] || 'assets/views/index.html';
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;