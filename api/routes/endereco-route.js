const router = require('express').Router()
const { endereco } = require('../controllers')

router.post('/endereco/add', endereco.add)
router.get('/endereco', endereco.getAll)
router.get('/endereco/:id', endereco.get)
router.put('/endereco/update/:id', endereco.updateData)
router.put('/endereco/delete/:id', endereco.delete)


module.exports = router