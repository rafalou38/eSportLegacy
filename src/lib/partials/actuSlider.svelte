<script lang="ts">
	import Button from '$lib/components/button.svelte';

	const events = [
		{
			name: 'lorem ipsum',
			image: 'https://source.unsplash.com/random/400x200'
		},
		{
			name: 'lorem ipsum',
			image: 'https://source.unsplash.com/random/400x200'
		},
		{
			name: 'lorem ipsum',
			image: 'https://source.unsplash.com/random/400x200'
		},
		{
			name: 'lorem ipsum',
			image: 'https://source.unsplash.com/random/400x200'
		},
		{
			name: 'lorem ipsum',
			image: 'https://source.unsplash.com/random/400x200'
		}
	];
	const elements: HTMLLIElement[] = new Array(events.length).fill(null);
	let current = 0;

	function add(n: number) {
		current = (current + n + events.length - 1) % (events.length - 1);
		elements[current].scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start'
		});
	}
</script>

<div class="flex justify-center">
	<button on:click={() => add(-1)}>
		<img src="/images/icons/arow.png" alt="" class="w-20" />
	</button>
	<ul class="flex w-[600px] overflow-x-scroll snap-mandatory snap-x mx-10">
		{#each events as event, i}
			<li bind:this={elements[i]} class="w-full flex-grow-0 flex-shrink-0 snap-start">
				<h3 class="text-white text-3xl mb-10 text-center">{event.name}</h3>
				<img class="w-full" src={event.image} alt="event preview" />
				<Button>Participer</Button>
			</li>
		{/each}
	</ul>
	<button on:click={() => add(1)}
		><img src="/images/icons/arow.png" alt="" class="rotate-180 w-20" /></button
	>
</div>

<style lang="postcss">
	ul {
		scrollbar-width: none;
	}
	ul::-webkit-scrollbar {
		display: none;
	}
</style>
