var express = require('express');
var router = express.Router();

var tasks = [{task:"Harambe", done:false}, {task:"Pepe", done:true}];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('todo', {taskList : tasks});
});

router.post('/', (req, res, next) => {
    console.log(req.body.strike)
    if (req.body.task != null && req.body.task.length > 0) {
        tasks.push({task:req.body.task, done:false});
    }
    if (req.body.strike != null) {
        tasks[req.body.strike].done = !tasks[req.body.strike].done;
    }

    res.redirect('/todo')
});

module.exports = router;
