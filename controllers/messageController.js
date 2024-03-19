const messageModel = require('../models/messageModel')

const sendMesageController = async (req, res) => {
  try {
    const { name, email, msg } = req.body
    if (!name) {
      return res.send({ message: 'Name is Required' })
    }
    if (!email) {
      return res.send({ message: 'Email is Required' })
    }
    if (!msg) {
      return res.send({ message: 'Message is Required' })
    }
    const result = await new messageModel({ name, email, msg }).save()

    if (result) {
      res.status(200).send({
        success: true,
        message: 'Message Send Successfully',
        result,
      })
    } else {
      res.status(404).send({
        success: false,
        message: 'Message Not  Send',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Sending Message',
    })
  }
}
module.exports = sendMesageController
