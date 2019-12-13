const buf = Buffer.alloc(10)
console.log(buf)

const buf2 = Buffer.from('abc')
console.log(buf2)

const buff3 = Buffer.from('中国')
console.log(buff3)

const buff4 = Buffer.concat([buf2, buff3])
console.log(buff4.toString())