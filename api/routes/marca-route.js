const router = require('express').Router()
const { marca } = require('../controllers')

router.post('/marca/add', marca.add)
router.get('/marca', marca.getAll)
router.get('/marca/:id', marca.get)
router.put('/marca/update/:id', marca.updateData)
router.put('/marca/delete/:id', marca.delete)


module.exports = router