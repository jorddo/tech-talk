const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const post = require('./post-routes');
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/post', post);
router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
