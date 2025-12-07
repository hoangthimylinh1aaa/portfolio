<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { _, locale } from 'svelte-i18n';
    import Navigation from '$lib/components/Navigation.svelte';
    import WavesBackground from '$lib/components/WavesBackground.svelte';
</script>

{#key $locale}
    <WavesBackground />
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex flex-col">
        <Navigation />

        <section class="flex-1 flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-[21]">
            <div class="w-full">
                <Motion
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        let:motion
                >
                    <h2 use:motion class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-3 sm:mb-4 uppercase tracking-wider">
                        {$_('home.greeting')}
                        <span class="text-gaming-gradient text-glow">Dai Thanh</span>
                    </h2>
                </Motion>

                <Motion
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        let:motion
                >
                    <p use:motion class="text-lg sm:text-xl md:text-2xl font-gaming text-cyan-300 mb-8 sm:mb-10 md:mb-12 tracking-wide">
                        {$_('home.title')}
                    </p>
                </Motion>

                <Motion
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        let:motion
                >
                    <div use:motion class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                        <a
                                href="/projects"
                                class="btn-gaming bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 text-sm sm:text-base"
                        >
                            {$_('home.viewProjects')}
                        </a>
                        <a
                                href="/contact"
                                class="btn-gaming border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-sm sm:text-base"
                        >
                            {$_('home.contactMe')}
                        </a>
                    </div>
                </Motion>
            </div>
        </section>
    </div>
{/key}
