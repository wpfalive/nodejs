const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const ora = require('ora')
module.exports.clone = async (repo, destination) => {
  const process = ora(`下载.... ${repo}`)
  process.start()
  await download(repo, destination)
  process.succeed()
}