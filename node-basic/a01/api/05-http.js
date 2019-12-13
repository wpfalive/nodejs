const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  // console.log(getProtoChain(res))
  const { url, method, headers } = req
  if (url === '/' && method === 'GET') {
    // 静态页面服务
    fs.readFile('index.html', (err, data) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    // Ajax服务
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({
      name: 'laowang'
    }))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    // 图片文件服务
    fs.createReadStream('./' + url).pipe(res)
  }
})
server.listen(3000)

function getProtoChain(obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  protoChain.push(null)
  return protoChain
}