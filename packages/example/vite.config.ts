import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import markdown from './vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/]
		}),
		markdown(),
		WindiCSS()
	]
});
