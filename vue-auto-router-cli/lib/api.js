const { clone } = require('./download')
module.exports.init = async name => {
  console.log('🔥创建项目: ', name)
  await clone('github:su37josephxia/vue-template', name)
  const handlebars = require('handlebars')
  const symbols = require('log-symbols')
  const chalk = require('chalk')
}

module.exports.refresh = async () => {
  const list = fs
    .readdirSync('./src/views')
    .filter(item => item !== 'Home.vue')
    .map(v => ({
        name: v.replace('.vue', '').toLowerCase(),
        file: v
      })
  )
  compile({ list }, './src/router.js', './template/router.js.hbs')
  compile({ list }, './src/App.vue', './template/App.vue.hbs')
}

function compile (meta, filePath, templatePath) {
  if (fs.existSync(templatePath)) {
    const content = fs.readFileSync(templatePath).toString()
    const result = handlebars.compile(content)(meta)
    fs.writeFileSync(filePath, result)
    console.log(symbols.success, chalk.green(`🔥${filePath} 创建成功`))
  }
}