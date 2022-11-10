const router = require('express').Router()
const { produto } = require('../controllers')

router.post('/produto/add', produto.add)
router.get('/produto', produto.getAll)
router.get('/produto/:id', produto.get)
router.put('/produto/update/:id', produto.updateData)
router.put('/produto/delete/:id', produto.delete)


module.exports = router