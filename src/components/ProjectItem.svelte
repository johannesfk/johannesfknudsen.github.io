<script lang="ts">
    /* import { image, initialize } from 'svelte-cloudinary';
    initialize({ cloud_name: 'jfknudsen' })
    const src = 'portfolioWebsite/DSC00146_qj5dks.webp'
     */


    // const src =  "/assets/images/" + images[Math.floor(Math.random() * images.length)];

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let photo;
    export let gridSize;
    export let projectId;
    
</script>

<a href=".#" class="project-item {gridSize}" id="{projectId}" on:click|self="{event => dispatch('imageClick', event.target)}">
    <h2>{photo.title}</h2>
    <div class="img-src">
        <!-- <img
            use:image={{src, bind: { width: '.img-src' }, lazy: true }}
            alt="background"/> -->
            <!-- <img src={src} alt="gallery"/> -->
            <img src={'./assets/images/' + photo.thumbnailUrl} alt="">
    </div>
</a>




<!-- <div class="project-item {gridSize}">
    <a href=".">
        <h2>{item}</h2>
        <div class="img-src">
            <img
                use:image={{src, bind: { width: '.img-src' }, lazy: true }}
                alt="background"/>
        </div>
    </a>
</div> -->