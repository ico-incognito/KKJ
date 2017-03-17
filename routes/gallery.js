/**
 * Created by GIGABYTE on 05-Feb-17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('gallery');
});


module.exports = router;
