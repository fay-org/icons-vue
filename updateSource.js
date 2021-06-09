const axios = require('axios')
const path = require('path')
const fs = require('fs-extra')

const sourcePath = path.join(__dirname, '../sourcemap')

const origin = 'https://vercel.com/design/icons'

;(async () => {
  try {
    await fs.remove(sourcePath)
    const source = await axios.get(origin)
    const html = source.data
    await fs.writeFile(sourcePath, html)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
