var express = require('express');
var router = express.Router();

var users = ["Harambe", "Pepe"];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', {userList : users});
});

router.post('/', (req, res, next) => {
    users.push(req.body.user);
    res.redirect('/users')
});

module.exports = router;
