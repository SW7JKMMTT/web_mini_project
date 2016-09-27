var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello WEB World!' });
});

router.get('/hello', (req, res, next) => {
    res.send('<p>World</p>');
});



module.exports = router;
