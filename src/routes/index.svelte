<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Johannes Farmer Knudsen</title>
</svelte:head>

<section>
	<h1>
		Johannes Farmer Knudsen
	</h1>

	<h2>
		Cinematographer, Gaffer, Colourist
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		color: var(--secondary-color);
		width: 100%;
		font-size: 5em;
		font-family: 'Bebas Neue', cursive;
		text-transform: uppercase;
	}
	h2 {
		color: var(--secondary-color);
		font-weight: bolder;
	}
</style>
