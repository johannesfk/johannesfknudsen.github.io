<script lang="ts">
    import LoadingAniIcon from "./elements/LoadingAniIcon.svelte";
    import { createEventDispatcher, onDestroy } from "svelte";
    
    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');

    function onRightClick() {
        return false;
    }
    
    let modal;
    // Key handling
    const handle_keydown = e => {
        if (e.key === 'Escape') {
            close();
            return;
        }

        if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => (n as HTMLElement)?.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			(tabbable[index] as HTMLElement)?.focus();
			e.preventDefault();
		}
    };
    // Tab behaviour 
    const previously_focused = typeof document !== 'undefined' && document.activeElement;
    if (previously_focused) {
		onDestroy(() => {
			(previously_focused as HTMLElement)?.focus();
		});
	}
    // src="{"assets/images/" + photo}"
    export let modalData;
    let isLoading = false;
    let displayLoading = false;
    function handleLoad () {
        isLoading = true;
        event => dispatch('displayLoader', event.target);
        if (isLoading) {
            setInterval(function () {
            if (isLoading == false) {
                console.log("No change last 2 sec");
                displayLoading = false;
            } else {
                console.log("Change past 2 sec");
                displayLoading = true;
            }
        }, 200)
        }
    }

    function modalHighresImage (t:any) {
        let lowres = t.previousElementSibling;
        console.log(lowres);
        lowres.style.display = 'none';
        console.log("lowres sdisplay = none");
        t.style.display = 'inline-block';
        console.log("highres sdisplay = block");
        isLoading = false;
        displayLoading = false;
        
    }
    let imgBaseUrl = "https://res.cloudinary.com/jfknudsen/image/upload/fl_any_format,f_auto,c_scale,q_95,";
    // let imgBaseUrl = "./assets";
    let imgFileUrl = "/cw/images/";
    // let imgFileUrl = "/images/";
    
</script>

<svelte:window on:keydown={handle_keydown}/>


<div class="modal" role="dialog" aria-modal="true" bind:this={modal} on:click|self={close}>
    <div class="lb-image-container" on:click|self={close}>
        <img class="lb-image" on:load={handleLoad}
            src="{modalData.modalContent.thumbnailUrl}"
            alt={"Thumbnail: " + modalData.modalContent.title}
            on:contextmenu|preventDefault={onRightClick}>
        <img class="lb-image lb-image-hq" on:load={event => modalHighresImage(event.target)}
            sizes="(max-width: 640px) 95vw, 50vw"
            srcset="{imgBaseUrl}w_512{imgFileUrl + modalData.modalContent.imageUrl} 512w,
                {imgBaseUrl}w_640{imgFileUrl + modalData.modalContent.imageUrl} 640w,
                {imgBaseUrl}w_960{imgFileUrl + modalData.modalContent.imageUrl} 960w,
                {imgBaseUrl}w_1024{imgFileUrl + modalData.modalContent.imageUrl} 1024w,
                {imgBaseUrl}w_2048{imgFileUrl + modalData.modalContent.imageUrl} 2048w"
            src="{imgBaseUrl}w_auto:50:1024{imgFileUrl + modalData.modalContent.imageUrl}"
            alt={modalData.modalContent.title}
            on:contextmenu|preventDefault={onRightClick}
        >
        {#if displayLoading}
            <LoadingAniIcon></LoadingAniIcon>
        {/if}
        <!-- svelte-ignore a11y-autofocus -->
        <span autofocus on:click={close} class="lb-close">&times;</span>
        <div on:click|self={close} class="lb-caption">{modalData.modalContent.title}</div>
    </div>
    <div class="modal-nav">
        <!-- TODO: Forward & Backward browsing buttons and logic. Id 1 +/- -->
        <p class="nav-forward">&#8250;</p>
        <p class="nav-backward">&#8249;</p>
    </div>
</div>

<div class="modal-background" on:click={close}>
</div>