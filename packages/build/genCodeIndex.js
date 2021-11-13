const glob = require('glob');
const path = require('path');
const util = require('util');
const fs = require('fs/promises');
const fsNode = require('fs');

async function craeteIndexFile() {
	const globPromise = util.promisify(glob);
	const tsFiles = await globPromise(path.join(__dirname, '../es/*.ts'));
	const genFilesCode = tsFiles.map((v) => genImportCode(v)).join('\n');
	await fs.writeFile(path.join(__dirname, '/index.ts'), genFilesCode);
}

function genImportCode(filePath) {
	filePath = filePath.replace('.ts', '');
	const filesName = filePath.slice(filePath.lastIndexOf('/') + 1);
	return `export { default as ${filesName} } from '../es/${filesName}';`;
}
async function copyShare() {
	try {
		await fs.stat('./packages//dist/es/share');
	} catch {
		await fs.mkdir('./packages/dist/es/share');
	}
	const readStream = fsNode.createReadStream('./packages/es/share/types.ts');
	const writeStream = fsNode.createWriteStream(
		'./packages/dist/es/share/types.d.ts'
	);
	readStream.read();
	readStream.pipe(writeStream);
}
exports.copyShare = copyShare;
exports.craeteIndexFile = craeteIndexFile;
