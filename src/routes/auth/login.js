const router = require('express').Router()
router.get('/login', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

module.exports = router
  