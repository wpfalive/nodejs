const fs = require('fs')

const rs = fs.createReadStream('./framework.png')
const ws = fs.createWriteStream('./bar.png')
rs.pipe(ws)
