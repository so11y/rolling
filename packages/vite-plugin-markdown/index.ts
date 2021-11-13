import markdown from 'markdown-it';
import hljs from 'highlight.js';

function highlight(str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		return (
			'<pre class="hljs"><code>' +
			hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
			'</code></pre>'
		);
	}
}

const genMarkdown = (source) => {
	const md = markdown({
		html: true,
		typographer: true,
		highlight: (str, lang) => highlight(str, lang)
	});

	const mdToHtml = md.render(source);

	return `<template><div class="pl-4 pr-4 md-content">${mdToHtml}</div></template>`;
};

export default function vitePluginMarkdown() {
	return {
		name: 'vite-plugin-markdown',
		enforce: 'pre',
		transform(source, id) {
			if (!/\.md$/.test(id)) {
				return;
			}
			try {
				return genMarkdown(source);
			} catch (e) {
				this.error(e);
			}
		}
		// handleHotUpdate(ctx) {
		// 	if (!/\.md$/.test(ctx.file)) return;

		// 	const readSource = ctx.read;
		// 	console.log(ctx);
		// 	ctx.read = async function () {

		// 	}
		// }
	};
}
