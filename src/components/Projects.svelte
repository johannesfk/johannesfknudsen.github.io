<script>
    import ProjectItem from "./ProjectItem.svelte";

    let items = ["Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project",];

    let gridSize;
</script>


<div class="projects">
    {#each items as item,i}
        {#if i == 4}
            <ProjectItem gridSize="big" {item}></ProjectItem>
        {:else if i == 14}
            <ProjectItem gridSize="big-wide" {item}></ProjectItem>
        {:else}
            <ProjectItem gridSize="default" {item}></ProjectItem>
        {/if}
    {/each}
</div>