const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.users)
router.post('/add', UserController.createSave)
router.get('/all', UserController.showUsers)
router.post('/remove/:id',UserController.removeUser)
router.get('/edit', UserController.showUser)
router.post('/update/:id', UserController.updateUser)

module.exports = router