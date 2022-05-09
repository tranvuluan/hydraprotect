const router = require('express').Router();
const appController = require('../controllers/appController');

router.get('/home', appController.getHome);


router.get('/detail', appController.getDetail);

router.get('/', appController.getLogin);

router.post('/', appController.postLogin);

router.get('/404', appController.getErrorPage);

router.get('*', (req, res) => {

  res.render('login', { title: 'Login', result: '' })
});

module.exports = router;
