const
	rollup = require('rollup'),
	resolve = require('@rollup/plugin-node-resolve').default,
	babel = require('@rollup/plugin-babel').default,
	terser = require('rollup-plugin-terser').terser,
	sass_loader = require('./sass-loader'),
	md_loader = require('./md-loader'),
	commonjs = require('@rollup/plugin-commonjs'),
	json = require('@rollup/plugin-json')

async function build_(inputOptions, outputOptions) {
	const bundle = await rollup.rollup(inputOptions);
	await bundle.write(outputOptions)
	await bundle.close();
}
const build = async op => {
	for (var i = op.input.length - 1; i >= 0; i--) { // https://i.imgur.com/PGBHgOT.jpg
		var a = op.input[i]
		if(typeof a == 'string') a = {js: a}
		await build_({
			input: a.js,
			plugins: [
				sass_loader({
					mode: op.mode,
					dir: op.css_dir,
					banner: op.banner = (op.mode == 'dev' ? undefined : op.banner)
				}),
				md_loader(),
				resolve(),
				babel({ babelHelpers: 'bundled' }),
				commonjs(),
				json()
			]
		}, {
			dir: op.js_dir,
			format: a.format || 'iife',
			plugins: op.mode == 'dev'? [] : [terser()],
			sourcemap: op.mode == 'dev',
			banner: op.banner
		})
	}
}
module.exports = build
