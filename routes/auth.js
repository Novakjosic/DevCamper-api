const express = require('express');
const { register,
    login,
    logout,
    getMe,
    forgotPassword,
    resetPassword,
    updateDetailes,
    updatePassword,
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatepassword', protect, updatePassword);
router.put('/updatedetails', protect, updateDetailes);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resettoken', resetPassword);

module.exports = router;