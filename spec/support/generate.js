const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')
const cheerio = require('cheerio')

const exec = cmd => new Promise((resolve, reject) => {
  childProcess.exec(cmd, (err, stdout, stderr) => {
    if (err) {
      return reject(err)
    }

    return resolve({stdout, stderr})
  })
});


module.exports = (name) => {
  const configPath = path.join(__dirname, '../fixtures/jsdoc.conf')
  const outputPath = path.join(__dirname, '../build', name)
  const filePath = path.join(__dirname, '../fixtures', name, 'index.js')

  return exec(`node ./node_modules/.bin/jsdoc -c '${configPath}' -d '${outputPath}' '${filePath}'`)
    .then(() => {
      const output = fs.readFileSync(path.join(outputPath, 'module-MyRoutes.html'))
      return cheerio.load(output.toString())
    })
}
