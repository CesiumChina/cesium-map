/**
 @author : Caven Chen
 @date : 2023-05-15
 */
import gulp from 'gulp'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'

async function buildMap(options) {
  const bundle = await rollup({
    input: 'src/index',
    external: ['@cesium/engine'],
    plugins: [
      commonjs(),
      resolve({ preferBuiltins: true }),
      babel({
        babelHelpers: 'runtime',
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: ['> 1%', 'last 2 versions', 'ie >= 10'],
              },
            },
          ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      terser(),
    ],
  })

  // Build IIFE
  if (options.iife) {
    await bundle.write({
      file: 'dist/cesium.map.min.js',
      format: 'iife',
      name: 'window',
      extend: true,
      globals: {
        '@cesium/engine': 'Cesium',
      },
      sourcemap: false,
    })
  }

  // Build Node
  if (options.node) {
    await bundle.write({
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: false,
    })
  }
}

export const build = gulp.series(() => buildMap({ node: true, iife: true }))

export const buildNode = gulp.series(() => buildMap({ node: true }))

export const buildIIFE = gulp.series(() => buildMap({ iife: true }))
