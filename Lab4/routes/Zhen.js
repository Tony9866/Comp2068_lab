/**
 * Created by 臻 on 2016-09-30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Zhen', { title: 'Zhen',
        message: 'It`s the first time play with node express'
    });
});

module.exports = router;
