<script lang="ts">
  import { locale } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import type { Locale } from '$lib/types/common';

  function switchLanguage(lang: Locale): void {
    locale.set(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', lang);
    }
  }

  function getBrowserLanguage(): Locale {
    if (typeof window === 'undefined') return 'en';

    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang?.toLowerCase().startsWith('vi')) {
      return 'vi';
    }
    return 'en';
  }

  let currentLocale: string | null | undefined;
  locale.subscribe((value) => {
    currentLocale = value;
  });

  onMount(() => {
    const savedLocale = localStorage.getItem('locale');
    if (!savedLocale) {
      // No saved locale, use browser language
      const browserLang = getBrowserLanguage();
      locale.set(browserLang);
      localStorage.setItem('locale', browserLang);
    }
  });
</script>

<div class="flex gap-2 items-center">
  <button
    on:click={() => switchLanguage('en')}
    class="px-4 py-2 rounded-lg font-gaming font-bold text-2xl transition-all {currentLocale ===
    'en'
      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white  shadow-cyan-500/50'
      : 'bg-gray-800/50 border-2 border-cyan-500/30 hover:border-cyan-400'}"
    title="English"
  >
    🇺🇸
  </button>
  <button
    on:click={() => switchLanguage('vi')}
    class="px-4 py-2 rounded-lg font-gaming font-bold text-2xl transition-all {currentLocale ===
    'vi'
      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white  shadow-cyan-500/50'
      : 'bg-gray-800/50 border-2 border-cyan-500/30 hover:border-cyan-400'}"
    title="Tiếng Việt"
  >
    🇻🇳
  </button>
</div>
