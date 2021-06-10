import fs from 'fs-extra'
import path from 'path'
import { JSDOM } from 'jsdom'
import { optimize } from 'svgo'
import { singleDefine } from './template'
import { camelize, replaceStyle } from './tools'

const outDir = path.resolve(__dirname, '../packages')
const sourcePath = path.join(__dirname, '../sourcemap')
export default (async () => {
  await fs.remove(outDir)
  const html = await fs.readFile(sourcePath, 'utf-8')
  const doc = new JSDOM(html).window.document
  const icons = doc.querySelectorAll('.geist-list .icon')

  await Array.from(icons).map(async (icon: Element) => {
    const name: string = camelize(
      icon.querySelector('.geist-text')!.textContent as string
    )
    const svg: SVGSVGElement = icon.querySelector('svg')!
    const { data: optimizeString } = optimize(svg.outerHTML)

    const _svg = replaceStyle(optimizeString)
    const component = singleDefine(name, _svg)

    await fs.outputFile(path.resolve(outDir, `${name}.tsx`), component)
  })
})()
