import fs from 'fs-extra'
import path from 'path'
import { JSDOM } from 'jsdom'
import { camelize, replaceStyle } from './tools'
import {
  renderTempalte,
  scriptTempalte,
  installerTemplate,
  makeBasicDefine,
} from './template'

const outDir = path.resolve(__dirname, '../packages')
const sourcePath = path.resolve(__dirname, '../sourceMap')

interface IsvgPathPool {
  [propName: string]: string
}

export default (async () => {
  await fs.remove(outDir)
  const html = await fs.readFile(sourcePath, 'utf8')
  const doc = new JSDOM(html).window.document
  const icons = doc.querySelectorAll('.geist-list .icon')
  const svgPathPool: IsvgPathPool = {}

  Array.from(icons).map((icon: any) => {
    const name: string = camelize(
      icon.querySelector('.geist-text').textContent as string
    )
    const svg = icon.querySelector('svg')
    const svgchildNode: string = replaceStyle(svg.innerHTML as string)
    svgPathPool[name] = svgchildNode
  })

  const componentFile = renderTempalte + scriptTempalte
  const installerFile = installerTemplate

  const iconsPoolFile = `interface IiconsPool {
    [propName: string]: string
  };\n
  const iconsPool: IiconsPool = ${JSON.stringify(svgPathPool)};\n
  export default iconsPool
  `

  const componentPath = path.join(outDir, './fectIcon.vue')
  const installerPath = path.join(outDir, './index.ts')
  const iconsPoolPath = path.join(outDir, './iconsPool.ts')
  const declarePath = path.join(outDir, './index.d.ts')
  await fs.mkdir(outDir)
  await fs.writeFile(iconsPoolPath, iconsPoolFile)
  await fs.writeFile(componentPath, componentFile)
  await fs.writeFile(installerPath, installerFile)
  await fs.writeFile(declarePath, makeBasicDefine)
})()
