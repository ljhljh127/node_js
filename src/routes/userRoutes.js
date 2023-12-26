const express = require('express');
const router = express.Router();

//컨트롤러
const userController = require('../controllers/userController')

router.post('/signup',userController.signup);
router.post('/login',);
router.patch('/:userId',)
router.delete(':/userId',)

module.exports = router;