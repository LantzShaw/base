/**
 * 此文件为.mjs 文件 需要在package.json中设置type为module
 */

import express from 'express'
// 此中间件已经被express集成，无需调用安装body-parser，可以直接采用express.json()和express.urlencoded()实现相同功能。东西都是一样的，所以这里还是使用body-parser来介绍。
import bodyParser from 'body-parser'
import cors from 'cors'
import fs from 'fs'
import { fileTypeFromBuffer } from 'file-type'
import { promisify } from 'util'

const app = express()

// body-parser
// 处理用户post请求提交的数据，把数据保存在req.body中。以一个对象的形式提供给服务器，方便进行后续的处理。由于无论用户提交什么都会接受，所以需要在使用数据前进行验证来提高安全性。

// 解析 content-type: application/json 并返回json格式的数据
app.use(
  bodyParser.json({
    type: 'application/json',
  })
)

// 解析 content-type:application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true, // 默认为true, 只有urlencoded才有该参数, 解析URL-encode数据的方法，true的话使用qs库来解析，false的话使用querystring库去解决
    inflate: true, // 默认为true, 是否开启压缩体解析
    limit: '100kb', //  default = '100kb' 最大请求数据，传入数字默认单位是bytes，传入字符串要带上单位
    parameterLimit: 1000, // default = 1000 控制url编码数据中最大参数数量，超过这个数量返回413
    type: 'application/x-www-form-urlencoded', // 接收数据的类型，默认是"application/x-www-form-urlencoded"
    // 验证数据，如果无效就可以提前抛出错误信息
    verify: (req, res, buf, encoding) => {},
  })
)

// 处理默认数据为application/octet-stream时候的中间件，应用场景是post传入语音、短视频等媒体类型的数据，默认处理小于100kb的数据，以buffer的形式解析
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '1mb' }))

// express 内置的 解析post的中间件
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// 解析静态资源文件的中间件
// app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())

const writeFileSync = promisify(fs.writeFile)

app.post('/upload', async (req, res, next) => {
  const fileBuffer = req.body

  const fileType = fileTypeFromBuffer(fileBuffer)

  // NOTE:
  // 这里要fileType进行判断， 因为file-type只能对ArrayBuffer二进制文件进行处理，数据以字节形式表示，可以包含任意的二进制数据，像视频、音频、需要特定的工具进行处理，zip文件需要通过压缩软件工具打开，对于文本文件无法处理
  // 所以当我们选择文本文件时，fileType是undefined，因为这些.txt、.html、.md是纯文本文件，以纯文本的形式进行存储，数据是以字符的形式存储表示，使用字符编码，例如：utf-8这样的编码映射到二进制，这些是可以直接通过人类的读取和直接的编辑操作
  if (fileType && fileType.ext === 'jpg') {
    const ext = fileType.ext
    const uniqueSuffix = Date().now() + '-' + Math.round(Math.random() * 1e9)

    const savePath = `/upload/${uniqueSuffix}.${ext}`

    await writeFileSync(savePath, fileBuffer)

    res.send('上传成功')
  } else {
    res.send('上传失败')
  }
})

app.listen(3000, err => {
  if (err) console.error(err)

  console.log('Server is running at http://localhost:3000')
})
