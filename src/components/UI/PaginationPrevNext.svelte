<script lang="ts">
  import IconChevronRight from '../icons/IconChevronRight.svelte';
  import IconChevronLeft from '../icons/IconChevronLeft.svelte';

  export let type: 'prev' | 'next';
  export let href: string;
</script>

{#if type === 'prev'}
  <a
    {href}
    aria-label="previous page"
    class="group mr-2 flex gap-1 text-base tracking-wider text-slate-700"
  >
    <span class="duration-150 group-hover:text-blue-500">
      <IconChevronLeft />
    </span>
    <span class="duration-150 group-hover:text-blue-500 hidden sm:block"> PREV </span>
  </a>
{:else if type === 'next'}
  <a
    {href}
    aria-label="next page"
    class="group ml-2 flex gap-1 text-base tracking-wider text-slate-700"
  >
    <span class="duration-150 group-hover:text-blue-500 hidden sm:block"> NEXT </span>
    <span class="duration-150 group-hover:text-blue-500">
      <IconChevronRight />
    </span>
  </a>
{/if}
