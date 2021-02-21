<script lang=ts>
    import Modal from "./Modal.svelte";
    import ProjectItem from "./ProjectItem.svelte";
    import LoadingAniIcon from "./elements/LoadingAniIcon.svelte";

    import { onMount } from 'svelte';
    
    export let photos = [];
    onMount(async () => {
		const res = await fetch(`./assets/projects.json`);
        photos = Object.values(await res.json());
	});
    
    function blankIfFalsy (d) {
        if (d) {
            return d;
        } else {
            return "";
        }
    }
    
    export function handleRightClick() {
        return false;
    }

    let gridSize;
    let projectId;

    // Modal
    let modalData: { showModal: boolean; modalContent: object; } = {
        showModal: false,
        modalContent: [],
    }

    function imageClickFunction (event) {        
        interface ModalContent {
            imageUrl: string;
            thumbnailUrl: string;
            title: string;
            id: number;
        }
        let modalContent: ModalContent = {
            imageUrl: photos[event.detail.id].thumbnailUrl,
            thumbnailUrl: event.detail.lastChild.lastChild.currentSrc,
            title: blankIfFalsy( photos[event.detail.id].title ),
            id: event.detail.id,
        };
        modalData = {
            showModal: true,
            modalContent: modalContent
        }
    }

</script>

<article class="projects">
    {#each photos as photo,i}
        <ProjectItem
            gridSize={photo.gridSize}
            {photo}
            on:imageClick="{imageClickFunction}"
            projectId={photo.id}
            on:rightClick={handleRightClick}>
        </ProjectItem>
    {:else}
        <LoadingAniIcon></LoadingAniIcon>
    {/each}
</article>

{#if modalData.showModal}
    <Modal on:close="{() => modalData.showModal = false}" {modalData} ></Modal>
{/if}
