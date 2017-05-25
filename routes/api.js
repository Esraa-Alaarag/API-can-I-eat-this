var express = require('express');
var router = express.Router();

var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api', { title: 'database' });
});
// adding the routs for the axios calls
router.get('/allergies/:userid', db.getuserpref);
router.post('/allergies', db.adduserpref);
router.post('/products', db.addnewproduct);
router.post('/information', db.addresult);
router.put('/allergies/:userid', db.editpref);

//router.get('/api/:userid', db.getproduct);
//router.delete('/api/:id', db.deleteproduct);

module.exports = router;
