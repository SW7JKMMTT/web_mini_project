var express = require('express');
var router = express.Router();
var basex = require("basex");

/* Run the basex server */
var client = new basex.Session("localhost", 1984, "admin", "admin")

/* GET home page. */
router.get('/', function(req, res, next) {
  client.execute(`XQUERY
            <table>
            <thead><td>Course</td><td>Title</td><td>Instructor</td></thead>
            {
              for $c in doc("uwm")/root/course_listing

                let $s := $c/section_listing
                order by $c/course
                return <tr><td>{data($c/course)}</td><td>{data($c/title)}</td><td>{$s[1]/instructor}</td></tr>
            }
            </table>
          `, function(err, reply) {
              res.render('xml', { test: reply.result } )
          });
});

module.exports = router;
