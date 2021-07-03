import { resolve } from 'path'
import { transformAsync } from '@babel/core'
import { copy, remove, readdir, readFileSync, outputFileSync } from 'fs-extra'

const cjsDir = resolve(__dirname, '../dist/cjs')
const esmDir = resolve(__dirname, '../dist/esm')
const pkgDir = resolve(__dirname, '../packages')

export type ModuleEnv = 'esmodule' | 'commonjs'

const setEnv = (mode: ModuleEnv) => (process.env.BABEL_MODULE = mode)

const compile = async (dir: string) => {
  const files = await readdir(dir)
  files.map((file: string) => {
    const filePath = resolve(dir, file)
    return new Promise<void>((resolve, reject) => {
      const code = readFileSync(filePath, 'utf-8')
      transformAsync(code, { filename: filePath })
        .then(async (res: any) => {
          if (res) {
            const jsFile = filePath.replace(/\.\w+$/, '.js')
            await remove(filePath)
            outputFileSync(jsFile, res.code)
            resolve()
          }
        })
        .catch(reject)
    })
  })
}

export default (async () => {
  setEnv('esmodule')
  await copy(pkgDir, esmDir)
  await compile(esmDir)
  setEnv('commonjs')
  await copy(pkgDir, cjsDir)
  await compile(cjsDir)
})()
