const express = require('express')
// const { sendEmailController } = require('../controllers/portfolioController.js')
const sendMesageController = require('../controllers/messageController.js')

const router = express.Router()

//routes
// router.post('/sendEmail', sendEmailController)

//send msg
router.post('/send-msg', sendMesageController)

//export
module.exports = router
