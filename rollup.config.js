import fs from 'fs-extra'
import path from 'path'
import babel from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

const packagePath = path.join(__dirname, './packages')

const extensions = ['.js', '.vue', '.tsx']

const external = ['vue', '@babel/runtime']

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
    clean: true,
  }),
  babel({
    exclude: 'node_modules/**',
    extensions,
    babelHelpers: 'runtime',
    presets: ['@babel/preset-env'],
    plugins: ['@vue/babel-plugin-jsx', '@babel/plugin-transform-runtime'],
  }),
  vue(),
  commonjs(),
  nodeResolve({
    browser: true,
    extensions,
  }),
]

const cjsOutPut = {
  format: 'cjs',
  exports: 'named',
  entryFileNames: '[name].js',
  dir: 'dist/cjs',
}

const esmOutPut = {
  format: 'es',
  exports: 'named',
  entryFileNames: '[name].js',
  dir: 'dist/esm',
}

export default (async () => {
  const files = await fs.readdir(packagePath)

  const compoenents = await Promise.all(
    files
      .map(async (name) => {
        const _name = name.replace(/\.tsx?$/g, ' ').trim()
        const comPath = path.join(packagePath, name)
        return {
          name: _name,
          url: comPath,
        }
      })
  )

  return [
    ...compoenents
      .filter((r) => r)
      .map(({ name, url }) => ({
        input: { [name]: url },
        output: [cjsOutPut, esmOutPut],
        external,
        plugins,
      })),
  ]
})()
