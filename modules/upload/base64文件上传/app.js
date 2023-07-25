const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(cors())

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

app.post('/upload', (req, res, next) => {
  const { files } = req.body

  const uploadFiles = []

  for (let i = 0; i < files.length; i++) {
    const { content, extension } = files[i]
    const fileContent = Buffer.from(content, 'base64') // 解码文件内容

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const fileName = `${path.join(__dirname, '/uploads')}/${uniqueSuffix}${extension}}`

    fs.writeFile(fileName, fileContent, err => {
      if (err) {
        res.status(500).send('Error writing')
      } else {
        uploadFiles.push(fileName)
      }

      if (uploadFiles.length === files.length) {
        if (uploadFiles.length === 0) {
          res.send('暂无文件上传')
        } else {
          res.send('文件上传成功')
        }
      }
    })

    console.log(filename, fileContent)
  }
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
