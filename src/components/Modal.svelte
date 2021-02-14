<script lang="ts">
    import { createEventDispatcher, onDestroy } from "svelte";

    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');

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
    
</script>

<svelte:window on:keydown={handle_keydown}/>
<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
    <div class="lb-imageContainer"><img class="lb-image" src="{modalData.modalContent.imageUrl}" alt=""></div>
    <div class="lb-caption">{modalData.modalContent.title}</div>
    <!-- svelte-ignore a11y-autofocus -->
    <span autofocus on:click={close} class="lb-close">&times;</span>
</div>
