const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')

const app = express()

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const originalName = file.originalname
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const extension = originalName.split('.').pop()
    cb(null, uniqueSuffix + '.' + extension)
  },
})

const upload = multer({
  // dest: 'uploads/',
  storage,
  limit: {
    fileSize: 1 * 1024 * 1024, // 最大1MB
    files: 3, // 最多上传 3 个文件
  },
  fileFilter: (req, file, cb) => {
    console.log(file)

    // 检查文件类型，只允许上传 .jpg 与 .png 格式的文件
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
    } else {
      cb(new Error('LIMIT_FILE_TYPE'))
    }
  },
})

// 处理跨域，外部要访问服务器资源（图片、视频等数据），会出现跨域问题，需要设置该模块，它限制了与其他服务器的跨源HTTP请求，并指定哪些域访问你的资源
app.use(cors()) // 表示所有 域名都可访问

// app.use(bodyParser())
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '1mb' }))

// 通过Express内置的express.static可以方便地托管静态文件，例如img、CSS、JavaScript 文件等
// 此方法对所有请求进行拦截，调用express.static('public')方法，该方法会检测请求文件类型，若是静态资源且定义的目录中有此资源，则直接返回此资源，否则调用方法中的next()方法，将请求传递给下一个路由
app.use(express.static(path.join(__dirname, 'public')))

// cors、bodyParser也可以单个接口使用，即：设置中间件
// app.post('/upload',cors(), bodyParser(),  (req, res) => {
//   console.log(req.body)
// })

// NOTE: 表单单文件上传
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) res.status(400).send('无上传文件')
//   console.log(req.file)
//   res.send('上传成功!')
// })

// NOTE: 表单多文件上传
// app.post('/upload', upload.array('files', 3), (req, res) => {
//   if (!req.files || req.files.length === 0) res.status(400).send('无上传文件')
//   console.log(req.files)
//   res.send('上传成功!')
// })

// NOTE: FileReader -> 逻辑在app.mjs中
app.post('/upload', (req, res) => {
  const fileData = req.body
  const fileName = `${Date().now()}.png`

  fs.writeFile(fileData, fileName, err => {
    if (err) {
      res.status(500).send('写入文件失败')
    } else {
      res.send('文件上传成功')
    }
  })

  res.send('上传成功!')
})

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') res.status(400).send('文件大小超过限制')
    else if (err.code === 'LIMIT_FILE_COUNT') res.status(400).send('超过最大上传文件数量')
    else res.status(500).send('上传文件时发生错误')
  } else if (err.message === 'LIMIT_FILE_TYPE') {
    res.status(500).send('文件类型错误')
  } else {
    res.status(500).send('服务器内部错误')
  }
})

app.listen(3000, error => {
  if (error) throw error

  console.log('Server is running at http://localhost:3000')
})
