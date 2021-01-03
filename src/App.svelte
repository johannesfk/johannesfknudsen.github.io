<script lang="ts">
import { each } from "svelte/internal";


	export let name: string;

	export let title = "Johannes F. K."
</script>

<style lang="scss" global>
	@import "./style/global.scss";
	@import "./style/comingSoon.scss";
</style>


<svelte:head>
	<title>{title ? `${title} • Website` : 'Website • Home'}</title>
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
	<h2>./J./F./K./</h2>
	<h2 class="csFancy">
		<span>C</span>
		<span>O</span>
		<span>M</span>
		<span>I</span>
		<span>N</span>
		<span>G</span>
		<span>&nbsp;</span>
		<span>S</span>
		<span>O</span>
		<span>O</span>
		<span>N</span>
	</h2>
	<p>There will soon be my personal website here. In the meantime check out this <a href="https://www.youtube.com/watch?v=aPXnVvmulNk" target="_blank" rel="noreferrer noopener">amazing music video</a> and my <a href="https://www.instagram.com/farmerknudsen/">instagram</a> where I showcase some of my work.</p>
	<small>Greatings, Johannes Farmer Knudsen</small>
</main>
