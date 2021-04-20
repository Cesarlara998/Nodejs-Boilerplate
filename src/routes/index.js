const router = require('express').Router()

router.use('/auth',require('./auth/index'))

module.exports = router