const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const app = express()

const storage = multer.diskStorage({
  destination: path.join(__dirname, '/uploads'),
  filename: (req, file, cb) => {
    // 读取文件名后缀名
    const ext = path.extname(file.originalname)

    // 生成随机文件名
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)

    const fileName = `${uniqueSuffix}${ext}`

    cb(null, fileName)
  },
})

app.use(cors())

// NOTE: extended false: 使用queryString库解析，true则是使用qs库解析
app.use(express.urlencoded({ extended: false, limit: '100MB' }))

const upload = multer({ storage })

app.post('/upload', upload.array('files'), (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const files = req.files

  console.log(name, email, files)

  if (!files) {
    res.send('无文件上传!')
    return
  }

  res.send('文件上传成功')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
