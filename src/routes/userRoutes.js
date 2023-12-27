const express = require('express');
const router = express.Router();

//컨트롤러
const userController = require('../controllers/userController');

router.post('/signup',userController.signup);
router.post('/login',userController.login);
router.patch('/:userid',);
router.delete(':/userid',);

module.exports = router;