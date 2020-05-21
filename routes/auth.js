const express =  require('express');
const { signUp } = require('../controllers/auth');
const { userSignUpValidator } = require('../validator');

const router = express.Router();

router.post('/register', userSignUpValidator, signUp);

module.exports = router;



