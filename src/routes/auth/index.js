const router = require('express').Router()
router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

// router.use('/',)
// router.use('/',)
// router.use('/',)

router.use('/',[require('./login'),require('./register'),require('./recover')])
module.exports = router
  