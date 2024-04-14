/**
 @author : Caven Chen
 @date : 2023-05-15
 */
import gulp from 'gulp'
import path from 'path'
import esbuild from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'

const buildConfig = {
  entryPoints: ['src/index.js'],
  bundle: true,
  color: true,
  legalComments: `inline`,
  logLimit: 0,
  target: `es2019`,
  minify: false,
  sourcemap: false,
  write: true,
  logLevel: 'info',
  plugins: [],
  external: ['@cesium/engine'],
}

async function buildMap(options) {
  // Build IIFE
  if (options.iife) {
    await esbuild.build({
      ...buildConfig,
      format: 'iife',
      globalName: '',
      plugins: [
        GlobalsPlugin({
          '@cesium/engine': 'Cesium',
        }),
      ],
      outfile: path.join('dist', 'cesium.map.min.js'),
    })
  }

  // Build Node
  if (options.node) {
    if (options.iife) {
      await esbuild.build({
        ...buildConfig,
        format: 'esm',
        outfile: path.join('dist', 'index.js'),
      })
    }
  }
}

export const build = gulp.series(() => buildMap({ node: true, iife: true }))

export const buildNode = gulp.series(() => buildMap({ node: true }))

export const buildIIFE = gulp.series(() => buildMap({ iife: true }))
