<script>
	import NavLink from '$lib/components/navLink.svelte';
</script>

<header>
	<nav>
		<ul class="flex gap-16 px-16 py-10">
			<NavLink href="/" matcher="^/$">Accueil</NavLink>
			<NavLink href="/about" matcher="about">Qui sommes-nous</NavLink>
			<NavLink href="/" matcher="#">Formations</NavLink>
			<NavLink href="/" matcher="#">Blog</NavLink>
			<NavLink href="/" matcher="#">Contact</NavLink>
		</ul>
	</nav>
</header>
