/**
 * Created by GIGABYTE on 05-Feb-17.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('regis');
});

router.post('/submit', function(req, res){
    console.log(req.body);
    res.send("You sent the name " + req.body.fname + " " + req.body.lname);

});





module.exports = router;
