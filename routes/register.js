var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('register', { title: 'Signup' });
});

router.get('/seller', function(req, res) {
    res.render('seller_account_register', { title: 'Signup' });
});

module.exports = router;
