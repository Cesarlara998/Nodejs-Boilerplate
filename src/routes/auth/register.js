const router = require('express').Router()
router.get('/register', function (req, res) {
    res.status(200).json({ message: 'Estás asd a nuestra API' })
  })

module.exports = router
  