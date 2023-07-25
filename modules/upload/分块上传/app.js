const express = require('express')
const multer = require('multer')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()

const upload = multer({
  dest: path.join(__dirname, 'uploads'),
})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 文件上传
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file // 获取上传文件对象
  const fileName = req.body.fileName // 获取文件名
  const totalChunks = parseInt(req.body.totalChunks)
  const currentChunk = parseInt(req.body.currentChunk)

  const chunkPath = path.join(__dirname, '/uploads', `${fileName}-chunk-${currentChunk}`) // 生成当前块的存储路径

  const chunkStream = fs.createReadStream(file.path) // 创建读取文件块的可读流
  const writeStream = fs.createWriteStream(chunkPath) // 创建写入当前块的可写流

  chunkStream.pipe(writeStream) // 将读取的文件内容通过管道写入当前块的文件

  chunkStream.on('end', () => {
    fs.unlinkSync(file.path) // 读取文件块的流结束后,删除临时文件

    const progress = ((currentChunk + 1) / totalChunks) * 100

    res.json({
      progress,
    })
  })
})

// 合并文件的请求
app.post('/merge', (req, res) => {
  const fileName = req.body.fileName
  const totalChunks = parseInt(req.body.totalChunks)
  const mergedPath = path.join(__dirname, '/uploads', fileName) // 生成合并后文件存储路径
  const writeStream = fs.createWriteStream(mergedPath) // 创建写入合并后的可写流

  const mergeChunks = index => {
    if (index === totalChunks) {
      writeStream.end()

      res.sendStatus(200)
      return
    }

    const chunkPath = path.join(__dirname, '/uploads', `${fileName}-chunk-${index}`) // 获取当前块的存储路径
    const chunk = fs.readFileSync(chunkPath) // 同步读取当前块的内容

    fs.unlinkSync(chunkPath) // 删除已合并块的文件

    writeStream.write(chunk, () => {
      mergeChunks(index + 1) // 递归合并下一块
    })
  }

  mergeChunks(0) // 从第一块开始合并
})

app.listen(3000, () => {
  console.log('server listening on  port 3000')
})
