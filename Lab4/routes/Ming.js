/**
 * Created by 臻 on 2016-09-30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Ming', { title: 'Ming',
        message: 'He is my roommate, and my best firend.'
    });
});

module.exports = router;
