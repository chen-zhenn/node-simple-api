const router = require('express').Router()
const { fornecedor } = require('../controllers')

router.post('/fornecedor/add', fornecedor.add)
router.get('/fornecedor', fornecedor.getAll)
router.get('/fornecedor/:id', fornecedor.get)
router.put('/fornecedor/update/:id', fornecedor.updateData)
router.put('/fornecedor/delete/:id', fornecedor.delete)


module.exports = router