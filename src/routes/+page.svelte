<script lang="ts">
	import PostItem from '$lib/components/PostItem.svelte';

	const posts = [
		{
			slug: 'film1',
			title: 'Film 1',
			imgUrl: 'stilhed/0.jpg',
			description: ['Gaffer', 'DIT', 'Dolly Grip']
		},
		{
			slug: 'film1',
			title: 'Film 2',
			imgUrl: 'stilhed/1_1.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 3',
			imgUrl: 'stilhed/1_2.jpg',
			description: ['Gaffer']
		},
		{
			slug: 'film1',
			title: 'Film 4',
			imgUrl: 'stilhed/2_1.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 5',
			imgUrl: 'stilhed/2_2.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 6',
			imgUrl: 'stilhed/2_3.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 7',
			imgUrl: 'stilhed/2_4.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 8',
			imgUrl: 'stilhed/2_5.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 9',
			imgUrl: 'stilhed/3.jpg',
			description: ['Gaffer', 'DIT']
		},
		{
			slug: 'film1',
			title: 'Film 10',
			imgUrl: 'stilhed/4.jpg',
			description: ['Gaffer', 'DIT']
		},
	]

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<!-- <h1>Johannes Farmer Knudsen</h1> -->
	<div class="flex flex-col w-full my-8">
		{#each posts as post}
			<PostItem {...post} />
		{/each}
		<!-- <PostItem imgUrl={img1_1} />
		<PostItem imgUrl={img1_2} />
		<PostItem imgUrl={img2_1} />
		<PostItem imgUrl={img2_2} />
		<PostItem imgUrl={img2_3} />
		<PostItem imgUrl={img2_4} />
		<PostItem imgUrl={img2_5} />
		<PostItem imgUrl={img3} />
		<PostItem imgUrl={img4} /> -->
	</div>
</div>
