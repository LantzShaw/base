const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
// 处理跨域，外部要访问服务器资源（图片、视频等数据），会出现跨域问题，需要设置该模块，它限制了与其他服务器的跨源HTTP请求，并指定哪些域访问你的资源
app.use(cors()) // 表示所有 域名都可访问

app.use(bodyParser())

// 通过Express内置的express.static可以方便地托管静态文件，例如img、CSS、JavaScript 文件等
// 此方法对所有请求进行拦截，调用express.static('public')方法，该方法会检测请求文件类型，若是静态资源且定义的目录中有此资源，则直接返回此资源，否则调用方法中的next()方法，将请求传递给下一个路由
app.use(express.static(path.join(__dirname, 'public')))

// cors、bodyParser也可以单个接口使用，即：设置中间件
// app.post('/upload',cors(), bodyParser(),  (req, res) => {
//   console.log(req.body)
// })

app.post('/upload', (req, res) => {
  console.log(req.body)
})

app.listen(3000, error => {
  if (error) throw error

  console.log('Server Created Successfully!')
})
