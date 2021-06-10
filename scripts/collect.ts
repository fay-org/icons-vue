import fs from 'fs-extra'
import path from 'path'

const packagePath = path.join(__dirname, '../packages')
const resolvePath = path.join(packagePath, './index.ts')

/**
 * replace system keyword
 */
const replaces = ['default', 'function', 'package', 'delete']

const importTemp = `
  import {App} from 'vue';\n`

const installTemp = `const install =(app:App)=>{
  components.forEach((c:any) => {
    if (c.install) {
      app.use(c);
    } else if (c.name) {
      app.component(c.name, c);
    }
  });
};\n
export { install };\n
export default { install }\n
`

export default (async () => {
  const files = await fs.readdir(packagePath)
  const name = files.map((file) => file.replace(/.vue/, ''))
  const imports = name
    .map((i) => {
      const names = replaces.includes(i) ? `_${i}` : i
      return `import ${names} from './${i}.vue';\n`
    })
    .join(' ')

  const components = `const components = [${name}];\n`
  const exports = `export {${name}};\n`
  const outer = importTemp + imports + components + installTemp + exports
  await fs.outputFile(resolvePath, outer)
})()
