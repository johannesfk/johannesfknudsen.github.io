<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let photo;
    export let gridSize;
    export let projectId;
    function onRightClick() {
        return false;
    }

    let imgBaseUrl = "https://res.cloudinary.com/jfknudsen/image/upload/fl_any_format,f_auto,c_scale,q_80,";
    let imgFileUrl = "/cw/images/";
    // let imgBaseUrl = "";
    // let imgFileUrl = "";
</script>

<a class="project-item {gridSize}" id="{projectId}" on:click|self="{event => dispatch('imageClick', event.target)}">
    <h2>{photo.title}</h2>
    <div class="img-src">
        <!-- <img
            use:image={{src, bind: { width: '.img-src' }, lazy: true }}
            alt="background"/> -->
            <!-- <img src={src} alt="gallery"/> -->
            <!-- <img src={'./assets/images/' + photo.thumbnailUrl}
            alt=""
            on:contextmenu|preventDefault={onRightClick}> -->
            {#if gridSize == "big-wide" }
                <img sizes="(max-width: 640px) 90vw, 75vw"
                    srcset="{imgBaseUrl}w_100{imgFileUrl + photo.thumbnailUrl} 100w,
                    {imgBaseUrl}w_125{imgFileUrl + photo.thumbnailUrl} 125w,
                    {imgBaseUrl}w_150{imgFileUrl + photo.thumbnailUrl} 150w,
                    {imgBaseUrl}w_200{imgFileUrl + photo.thumbnailUrl} 200w,
                    {imgBaseUrl}w_225{imgFileUrl + photo.thumbnailUrl} 225w,
                    {imgBaseUrl}w_250{imgFileUrl + photo.thumbnailUrl} 250w,
                    {imgBaseUrl}w_320{imgFileUrl + photo.thumbnailUrl} 320w,
                    {imgBaseUrl}w_512{imgFileUrl + photo.thumbnailUrl} 512w,
                    {imgBaseUrl}w_640{imgFileUrl + photo.thumbnailUrl} 640w,
                    {imgBaseUrl}w_1024{imgFileUrl + photo.thumbnailUrl} 1024w,
                    {imgBaseUrl}w_2048{imgFileUrl + photo.thumbnailUrl} 2048w"

                    src="{imgBaseUrl}w_auto:50:1024{imgFileUrl + photo.thumbnailUrl}"
                    alt="{photo.title}"
                    on:contextmenu|preventDefault={onRightClick}
                >
            {:else if  gridSize == "big"}
                <img sizes="(max-width: 640px) 50vw, 50vw"
                    srcset="{imgBaseUrl}w_100{imgFileUrl + photo.thumbnailUrl} 100w,
                    {imgBaseUrl}w_125{imgFileUrl + photo.thumbnailUrl} 125w,
                    {imgBaseUrl}w_150{imgFileUrl + photo.thumbnailUrl} 150w,
                    {imgBaseUrl}w_200{imgFileUrl + photo.thumbnailUrl} 200w,
                    {imgBaseUrl}w_225{imgFileUrl + photo.thumbnailUrl} 225w,
                    {imgBaseUrl}w_250{imgFileUrl + photo.thumbnailUrl} 250w,
                    {imgBaseUrl}w_320{imgFileUrl + photo.thumbnailUrl} 320w,
                    {imgBaseUrl}w_512{imgFileUrl + photo.thumbnailUrl} 512w,
                    {imgBaseUrl}w_640{imgFileUrl + photo.thumbnailUrl} 640w,
                    {imgBaseUrl}w_720{imgFileUrl + photo.thumbnailUrl} 720w,
                    {imgBaseUrl}w_1024{imgFileUrl + photo.thumbnailUrl} 1024w,
                    {imgBaseUrl}w_2048{imgFileUrl + photo.thumbnailUrl} 2048w"

                    src="{imgBaseUrl}w_auto:50:512{imgFileUrl + photo.thumbnailUrl}"
                    alt="{photo.title}"
                    on:contextmenu|preventDefault={onRightClick}
                >
            {:else}
                <img sizes="(max-width: 485px) 30vw,
                    (max-width: 640px) 30vw, 20vw"
                    srcset="{imgBaseUrl}w_50{imgFileUrl + photo.thumbnailUrl} 50w,
                    {imgBaseUrl}w_100{imgFileUrl + photo.thumbnailUrl} 100w,
                    {imgBaseUrl}w_125{imgFileUrl + photo.thumbnailUrl} 125w,
                    {imgBaseUrl}w_150{imgFileUrl + photo.thumbnailUrl} 150w,
                    {imgBaseUrl}w_200{imgFileUrl + photo.thumbnailUrl} 200w,
                    {imgBaseUrl}w_225{imgFileUrl + photo.thumbnailUrl} 225w,
                    {imgBaseUrl}w_250{imgFileUrl + photo.thumbnailUrl} 250w,
                    {imgBaseUrl}w_320{imgFileUrl + photo.thumbnailUrl} 320w,
                    {imgBaseUrl}w_512{imgFileUrl + photo.thumbnailUrl} 512w,
                    {imgBaseUrl}w_640{imgFileUrl + photo.thumbnailUrl} 640w,
                    {imgBaseUrl}w_1024{imgFileUrl + photo.thumbnailUrl} 1024w"

                    src="{imgBaseUrl}w_auto:50:200{imgFileUrl + photo.thumbnailUrl}"
                    alt="{photo.title}"
                    on:contextmenu|preventDefault={onRightClick}
                >
            {/if}
    </div>
</a>