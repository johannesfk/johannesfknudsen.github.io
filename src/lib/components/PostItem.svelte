<script lang="ts">

  export let imgUrl: string;
  export let slug = '';
  export let title = '';
  export let description = [''];

</script>

<a href="/{slug}" class="aspect-[24/10] m-2 inline-block overflow-hidden rounded-xl card card-hover bg-cover bg-center bg-no-repeat light-shine"
  style="background-image: url(/src/lib/assets/images/{imgUrl})">
  <section class="h-full flex justify-center items-end">
    <div class="m-4">
      <h2>{title}</h2>
      <div class="mt-4 flex flex-row gap-1">
        {#each description as item,i }
          {#if i < description.length - 1}
            <p>{item}, </p>
          {:else}
            <p>{item}</p>
          {/if}
        {/each}
      </div>
    </div>
  </section>
  <!-- <img src={imgUrl} alt=""> -->
</a>

<style>
  section h2,
  section p {
    text-shadow: 2px 2px 8px rgba(0,0,0,0.92);
  }
</style>
