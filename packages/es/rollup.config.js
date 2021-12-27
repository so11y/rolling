import typeScriptPlugin from 'rollup-plugin-typescript2';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
const pkg = require(path.resolve(__dirname, `package.json`));

const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}
* @license MIT
*/`;

const createformat = (config) => {
	const defaultConfig = Object.assign({ output: {}, plugins: [] }, config);
	return {
		input: './src/index.ts',
		plugins: [
			typeScriptPlugin({
				check: false,
				tsconfig: path.resolve(__dirname, './tsconfig.json'),
				tsconfigOverride: {
					exclude: ['./src/__tests__/**/*.ts', './src/jest/**/*.ts']
				}
			}),
			...defaultConfig.plugins
		],
		external: ['vue'],
		output: defaultConfig.output
	};
};

export default [
	createformat({
		output: {
			banner,
			file: `./dist/${pkg.name}.esm-browser.js`,
			format: 'es'
		}
	}),
	createformat({
		output: {
			banner,
			file: `./dist/${pkg.name}.prod.js`,
			format: 'cjs'
		},
		plugins: [
			terser({
				compress: {
					ecma: 2015
				}
			})
		]
	})
];
