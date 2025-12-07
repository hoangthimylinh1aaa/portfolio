<script lang="ts">
    import { locale } from 'svelte-i18n';
    import type { Locale } from '$lib/types/common';

    function switchLanguage(lang: Locale): void {
        locale.set(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', lang);
        }
    }

    let currentLocale: string | null | undefined;
    locale.subscribe((value) => {
        currentLocale = value;
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
