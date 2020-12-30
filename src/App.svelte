<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>J.\F.\K.\</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:head>
	<title>Johannes Farmer Knudsen</title>
    <meta http-equiv="refresh" content="0; URL=https://www.youtube.com/watch?v=aPXnVvmulNk" />
</svelte:head>