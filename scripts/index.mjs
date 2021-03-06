import children from 'child_process';
import path from 'path';
import util from 'util';
const spawn = util.promisify(children.spawn);
const ContentCwd = process.cwd();
const ExampleCwd = path.join(ContentCwd, '/packages/example');
const vitePluginMarkdownCwd = path.join(
	ContentCwd,
	'/packages/vite-plugin-markdown'
);

function runnerInstall(cwd) {
	return spawn('pnpm ', ['install'], {
		stdio: 'inherit',
		cwd: cwd,
		shell: true
	});
}

function run() {
	runnerInstall(ContentCwd);
	runnerInstall(ExampleCwd);
	runnerInstall(vitePluginMarkdownCwd);
}
run();
