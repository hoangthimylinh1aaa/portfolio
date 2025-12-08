<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import { isLoading } from 'svelte-i18n';
</script>

<svelte:head>
  <!-- Basic favicon -->
  <link rel="icon" href="/src/lib/assets/favicon.svg" />

  <!-- PNG favicons for browsers -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

  <!-- Apple touch icon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

  <!-- Web app manifest (optional) -->
  <link rel="manifest" href="/site.webmanifest" />

  <!-- Theme color for mobile UIs -->
  <meta name="theme-color" content="#111827" />
</svelte:head>

{#if $isLoading}
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-2xl text-indigo-600">Loading...</div>
  </div>
{:else}
  <slot />
{/if}
