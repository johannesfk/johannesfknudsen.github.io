<script lang="ts">
import { each } from "svelte/internal";
import Projects from "./components/Projects.svelte";
import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";



	export let name: string;

	export let title = "Johannes F. K."
</script>

<style lang="scss" global>
	@import "./style/main.scss";
</style>


<svelte:head>
	<title>{title ? `${title} • Website` : 'Website • Home'}</title>
</svelte:head>

<Header></Header>
<main>
	<h1>Hello {name}!</h1>
	<h2>./J./F./K./</h2>
	<p>There will soon be my personal website here. In the meantime check out this <a href="https://www.youtube.com/watch?v=aPXnVvmulNk" target="_blank" rel="noreferrer noopener">amazing music video</a> and my <a href="https://www.instagram.com/farmerknudsen/">instagram</a> where I showcase some of my work.</p>
	<small>Greatings, Johannes Farmer Knudsen</small>

	<Projects></Projects>
</main>
<Footer></Footer>