<script>
    import ProjectItem from "./ProjectItem.svelte";

    let items = ["","","","","","","","","","","","","","","","","","","","","","","","",];
</script>

<style lang="scss">
    .projects {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 15px;
        column-gap: 15px;
    }
</style>

<div class="projects">    
    {#each items as item}
        <ProjectItem {item}></ProjectItem>
    {/each}
</div>