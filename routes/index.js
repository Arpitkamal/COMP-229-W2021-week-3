var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home',});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home',});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('project', { title: 'Projects',});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',});
});

/* GET Services page. */
router.get('/contect', function(req, res, next) {
  res.render('index', { title: 'Contects',});
});




module.exports = router;
