var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* GET about page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET products  page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact me page. */
router.get('/github', function(req, res, next) {
  res.render('index', { title: 'Github' });
});

/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});

module.exports = router;
