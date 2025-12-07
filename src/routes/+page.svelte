<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { _, locale } from 'svelte-i18n';
    import Navigation from '$lib/components/Navigation.svelte';
</script>

{#key $locale}
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex flex-col">
        <Navigation />

        <section class="flex-1 flex items-center justify-center max-w-6xl mx-auto px-6 text-center relative">
            <div class="w-full">
                <Motion
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        let:motion
                >
                    <h2 use:motion class="text-6xl font-display font-black text-white mb-4 uppercase tracking-wider">
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
                    <p use:motion class="text-2xl font-gaming text-cyan-300 mb-12 tracking-wide">
                        {$_('home.title')}
                    </p>
                </Motion>

                <Motion
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        let:motion
                >
                    <div use:motion class="flex gap-6 justify-center">
                        <a
                                href="/projects"
                                class="btn-gaming bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                        >
                            {$_('home.viewProjects')}
                        </a>
                        <a
                                href="/contact"
                                class="btn-gaming border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                        >
                            {$_('home.contactMe')}
                        </a>
                    </div>
                </Motion>
            </div>

            <!-- Gaming Grid Background Effect -->
            <div class="absolute inset-0 pointer-events-none opacity-10 -z-10">
                <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
            </div>
        </section>
    </div>
{/key}
