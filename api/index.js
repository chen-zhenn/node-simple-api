const express = require('express')
const app = express()
const port = 3000

app.listen(port, _ => {
    console.log(`App escutando na porta ${port}...`)
})