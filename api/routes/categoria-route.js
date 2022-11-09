const router = require('express').Router()
const bodyParser = require('body-parser')

router.get('/categoria', (req,res) => {     
    res
        .status(200)
        .send({data: 'Sucesso!'})
})

module.exports = router