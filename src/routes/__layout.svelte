<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<a href="mailto:jfknudsen.work@gmail.com">Contact</a>
</footer>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
