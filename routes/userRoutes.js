const express = require('express');
const { getProfile, getAllUsers, updateProfile, deleteProfile } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', authenticate, getProfile);
router.get('/', getAllUsers);
router.put('/profile', authenticate, updateProfile);
router.delete('/profile', authenticate, deleteProfile);

module.exports = router;