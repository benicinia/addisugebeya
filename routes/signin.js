var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res) {
    res.render('login');
   });
router.get('/v1', function(req, res) {
    
    res.render('login1');
   });

module.exports = router;
