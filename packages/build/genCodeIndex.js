const glob = require('glob');
const path = require('path');
const util = require('util');
const fs = require('fs/promises');

async function craeteIndexFile() {
	const globPromise = util.promisify(glob);
	const tsFiles = await globPromise(path.join(__dirname, '../es/*.ts'));
	const genFilesCode = tsFiles.map((v) => genImportCode(v)).join('\n');
	await fs.writeFile(path.join(__dirname, '/index.ts'), genFilesCode);
}

function genImportCode(filePath) {
	filePath = filePath.replace('.ts', '');
	const filesName = filePath.slice(filePath.lastIndexOf('/') + 1);
	return `export { default as ${filesName} } from '${filePath}';`;
}

module.exports = craeteIndexFile;
