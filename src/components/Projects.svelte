<script>
    import ProjectItem from "./ProjectItem.svelte";

    let items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
</script>

<style>
    .projects {
        background-color: darkslategrey;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 15px;
        column-gap: 15px;
    }
</style>

<h1>Portfolio</h1>
<div class="projects">    
    {#each items as item}
        <ProjectItem {item}></ProjectItem>
    {/each}
</div>