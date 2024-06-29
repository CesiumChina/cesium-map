/**
 @author : Caven Chen
 @date : 2023-05-15
 */
import gulp from 'gulp'
import path from 'path'
import esbuild from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import fse from 'fs-extra'
import shell from 'shelljs'
import chalk from 'chalk'

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
  external: ['cesium'],
}

async function buildModules(options) {
  // Build IIFE
  if (options.iife) {
    await esbuild.build({
      ...buildConfig,
      format: 'iife',
      minify: options.minify,
      globalName: '',
      plugins: [
        GlobalsPlugin({
          cesium: 'Cesium',
        }),
      ],
      outfile: path.join('dist', 'cesium.map.min.js'),
    })
  }

  // Build Node
  if (options.node) {
    await esbuild.build({
      ...buildConfig,
      minify: options.minify,
      format: 'esm',
      outfile: path.join('dist', 'index.js'),
    })
  }
}

async function regenerate(option, content) {
  await fse.remove('dist/cesium.map.min.js')
  await fse.remove('dist/index.js')
  await buildModules(option)
}

export const dev = gulp.series(() => {
  shell.echo(chalk.yellow('============= start dev =============='))
  const watcher = gulp.watch('src', {
    persistent: true,
    awaitWriteFinish: {
      stabilityThreshold: 1000,
      pollInterval: 100,
    },
  })
  watcher
    .on('ready', async () => {
      await regenerate({ iife: true, node: true })
    })
    .on('change', async () => {
      let now = new Date().getTime()
      await regenerate({ iife: true, node: true })
      shell.echo(
        chalk.green(`regenerate lib takes ${new Date().getTime() - now} ms`)
      )
    })
  return watcher
})

export const buildNode = gulp.series(() =>
  buildModules({ node: true, minify: true })
)

export const buildIIFE = gulp.series(() =>
  buildModules({ iife: true, minify: true })
)

export const build = gulp.series(() =>
  buildModules({ node: true, iife: true, minify: true })
)
