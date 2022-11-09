const router = require('express').Router()
const bodyParser = require('body-parser')

const { categoria } = require('../controllers')

router.get('/categoria', categoria.get)

module.exports = router