<script lang="ts">
	import { each } from "svelte/internal";
	import Projects from "./components/Projects.svelte";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	
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
	<Projects></Projects>
</main>
<Footer></Footer>

<!-- <span class="scrollbar">
	<span class="scrollbar-thumb"></span>
</span> -->