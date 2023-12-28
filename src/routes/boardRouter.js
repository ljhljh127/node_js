const express = require('express');
const router = express.Router();

//컨트롤러
const boardController = require('../controllers/boardContoller');

router.post('/',boardController.post);
router.get('/',boardController.get)



module.exports = router;