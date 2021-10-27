<script>
	import { page } from '$app/stores';

	export let href = '';
	export let matcher = '';

	let active = false;

	$: active = !!($page.path || '').match(matcher);
</script>

<li class="">
	<a class="group relative text-2xl" {href} class:active>
		<slot>LINK</slot>
	</a>
</li>

<style lang="postcss">
	a::after {
		content: '';
		@apply bg-t-blue absolute -bottom-0.5 left-0 h-[2px] w-full transform-cpu scale-x-0 transition-transform;
	}
	a.active::after,
	a:hover::after {
		@apply scale-x-100;
	}
</style>
