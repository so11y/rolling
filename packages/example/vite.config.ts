import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import markdown from '../vite-plugin-markdown';

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/]
		}),
		markdown() as Plugin,
		WindiCSS()
	]
});
