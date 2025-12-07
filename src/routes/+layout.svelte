<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import { isLoading } from 'svelte-i18n';
</script>

{#if $isLoading}
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-2xl text-indigo-600">Loading...</div>
  </div>
{:else}
  <slot />
{/if}
