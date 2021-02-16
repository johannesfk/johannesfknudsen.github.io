<script lang=ts>
    import Modal from "./Modal.svelte";
    import ProjectItem from "./ProjectItem.svelte";

    import { onMount } from 'svelte';

    //let photos = ["First Project","Second Project","Third Project","Forth Project","Fifth Project","Sixth Project","Seventh Project","Eight Project","Ninth Project","Tenth Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project","Some Project",];

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

    let gridSize;
    let projectId;

    // Modal
    let modalData: { showModal: boolean; modalContent: object; } = {
        showModal: false,
        modalContent: [],
    }

    function imageClickFunction (event) {        
        // let modalData = [];
        // console.log("This is something");
        // console.log(event.detail);
        // modalData = photos[event.detail.id];
        // console.log(event.detail.lastChild.lastChild.src);
        interface ModalContent {
            imageUrl: string;
            title: string;
            id: number;
        }
        let modalContent: ModalContent = {
            imageUrl: event.detail.lastChild.lastChild.src,
            title: blankIfFalsy( photos[event.detail.id].title ),
            id: event.detail.id,
        };
        modalData = {
            showModal: true,
            modalContent: modalContent
        }
    }

    let imgTestLinkBase = "https://res.cloudinary.com/jfknudsen/image/upload/fl_any_format,f_auto,c_scale,q_auto:good,";
    let imgTestLinkUrl = "/cw/images/TestDJI_0199.jpg";

</script>

<article class="projects">
    {#each photos as photo,i}
        <ProjectItem
            gridSize={photo.gridSize}
            {photo}
            on:imageClick="{imageClickFunction}"
            projectId={photo.id}>
        </ProjectItem>
    {:else}
        <p>Loading...</p>
    {/each}
</article>

{#if modalData.showModal}
    <Modal on:close="{() => modalData.showModal = false}" {modalData} ></Modal>
{/if}
