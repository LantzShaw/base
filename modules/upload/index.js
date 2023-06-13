const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('G')
})

app.listen(1000)
