const rollup = require('rollup');
const path = require('path');
const craeteIndexFile = require('./genCodeIndex');
const typeScriptPlugin = require('rollup-plugin-typescript2');
const fs = require('fs/promises');
const outputOptions = {
	output: {
		file: path.join(__dirname, '../dist/index.js'),
		format: 'es'
	}
};
async function build() {
	await craeteIndexFile();
	const bundle = await rollup.rollup({
		input: path.join(__dirname, './index.ts'),
		plugins: [
			typeScriptPlugin({
				tsconfigDefaults: {
					files: [path.join(__dirname, './index.ts')]
				}
			})
		]
	});
	await bundle.generate(outputOptions);
	await bundle.write(outputOptions);
	fs.unlink(path.join(__dirname, './index.ts'));
	//
}

build();
