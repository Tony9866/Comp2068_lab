/**
 * Created by 臻 on 2016-09-30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Han', { title: 'Han',
        message: 'He is my big brother.'
    });
});

module.exports = router;
