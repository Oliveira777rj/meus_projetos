const router = require('express').Router()
const AppointmentController = require('../controllers/appointmentController');

router.get('/register', AppointmentController.register)
router.post('/register', AppointmentController.saveRegister)
router.get('/view', AppointmentController.all)
router.get('/view/:prontuario', AppointmentController.allView)

module.exports = router
