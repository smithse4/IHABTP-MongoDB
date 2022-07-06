const router = require('express').Router();
const views = require('./view');
const apiRoutes = require('./api');

router.use('/', views);
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
