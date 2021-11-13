<style scoped>
.app-header {
	@apply shadow-lg flex items-center pl-4 pr-4 text-2xl font-bold h-16 relative z-10;
}
.app-aside {
	width: theme('width.44');
	height: calc(theme('height.screen') - theme('height.16'));
}
.app-main {
	position: fixed;
	top: theme('height.16');
	left: theme('width.44');
	right: theme('width.0');
	height: calc(theme('height.screen') - theme('height.16'));
}
</style>
<template>
	<div class="app-header">TS-Lodash</div>
	<div class="right-0"></div>
	<div class="app-aside fixed top-16 left-0 overflow-y-auto">
		<app-menu />
	</div>
	<div class="app-main">
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appMenu from './app-menu.vue';

export default defineComponent({
	components: {
		appMenu
	},
	setup() {
		return {};
	}
});
</script>
