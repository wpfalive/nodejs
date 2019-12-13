const os = require('os')
const util = require('util')
const cpuStat = require('cpu-stat')

const getCpu = util.promisify(cpuStat.usagePercent)

async function getCpuInfo() {
  const mem = os.freemem() / os.totalmem() * 100
  console.log('free-->', mem.toFixed(2))
  const percent = await getCpu()
  console.log('cpu--->', percent)
}

// getCpuInfo()
module.exports = {
  getCpuInfo
}
