const router = require('express').Router();
const appController = require('../controllers/appController');

router.get('/home', appController.getHome);


router.get('/detail', appController.getDetail);

router.get('/', appController.getLogin);

router.post('/', appController.postLogin);

router.get('/404', appController.getErrorPage);



module.exports = router;
