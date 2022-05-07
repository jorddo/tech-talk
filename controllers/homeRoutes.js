const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('homepage', { loggedIn: true });
  } else {
    res.render('homepage');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.render('homepage', { loggedIn: req.session.loggedIn });
  } else {
    res.render('login');
  }
});

router.get('/signUp', (req, res) => {
  if (req.session.loggedIn) {
    res.render('homepage', { loggedIn: req.session.loggedIn });
  } else {
    res.render('signup');
  }
});

router.get('/postUpdate', (req, res) => {
  res.render('post-update', { loggedIn: true });
});

module.exports = router;
