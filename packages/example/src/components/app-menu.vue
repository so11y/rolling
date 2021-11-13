<style>
.is-active {
	@apply bg-gray-300;
	color: theme('colors.black') !important;
	position: relative;
}
.is-active::after {
	content: '';
	position: absolute;
	width: 6px;
	top: 0;
	left: 0;
	height: 100%;
	background: theme('colors.black');
}
.menu-item {
	@apply h-8	cursor-pointer	flex items-center text-gray-500 hover:text-black;
}
</style>
<template >
	<div>
		<div v-for="(i, k) in menuConfig" :key="k">
			<div class="sticky bg-white top-0 indent-md">
				<div class="flex items-center h-12 text-lg cursor-pointer">
					{{ k }}
				</div>
			</div>
			<div v-if="i.length" class="indent-xl">
				<div
					v-for="v in i"
					:class="{ 'is-active': isActiveRouterName.name === v.title }"
					class="menu-item"
					@click="setRouter(v.title)"
				>
					{{ v.title }}
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import tsLodashConfig from '../../ts-lodash.config';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
	name: 'appMenu',
	setup() {
		const route = useRoute();
		const router = useRouter();
		const setRouter = (routerName: string) => {
			router.push({ path: '/' + routerName });
		};
		return {
			setRouter,
			isActiveRouterName: route,
			menuConfig: markRaw(tsLodashConfig.menu)
		};
	}
});
</script>
