const router = require('express').Router()

const { categoria } = require('../controllers')

router.post('/categoria/add', categoria.add)
router.get('/categoria', categoria.getAll)
router.get('/categoria/:id', categoria.get)
router.put('/categoria/update/:id', categoria.updateData)
router.put('/categoria/delete/:id', categoria.delete)


module.exports = router