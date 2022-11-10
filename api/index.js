const express = require('express')
const routes = require('./routes')
const app = express()
const port = 8000

routes(app)

app.listen(port, _ => {
    console.log(`App escutando na porta ${port}...`)
})