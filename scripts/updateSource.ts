import axios from 'axios'
import path from 'path'
import fs from 'fs-extra'

const sourcePath = path.resolve(__dirname, '../sourceMap')

export default (async () => {
  try {
    await fs.remove(sourcePath)
    const iconSource = await axios.get('https://vercel.com/design/icons')
    const html = iconSource.data
    await fs.writeFile(sourcePath, html)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
