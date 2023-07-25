const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.post('/upload', (req, res) => {})

app.listen(3000, () => {
  console.log('server listening on 3000')
})
