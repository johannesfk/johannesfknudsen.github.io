<script lang='ts'>
	import { page } from "$app/stores";

	import "@fontsource/quicksand";
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
	
 </script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<div class="flex flex-row justify-center">
			<!-- <nav class="list-nav">
				<ul class="flex flex-row">
					<li><a href="/" class="{classesActive("/")}">Home</a></li>
					<li><a href="/about" class="{classesActive("/about")}">About</a></li>
				</ul>
			</nav> -->
			<h3 class="">Johannes Farmer Knudsen</h3>
			<!-- <div></div> -->
		</div>
	</svelte:fragment>

	<slot />
</AppShell>


<style>
  :global(body) {
    font-family: "Quicksand", sans-serif;
  }
</style>

