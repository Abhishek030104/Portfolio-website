const sendEmailController = (req, res) => {
  try {
    return res.status(200).send({
      success: true,
      message: 'Your Message send successfully',
    })
  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: 'Send Email API Error',
      err,
    })
  }
}

module.exports = { sendEmailController }
