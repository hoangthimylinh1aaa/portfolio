<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { _, locale } from 'svelte-i18n';
    import Navigation from '$lib/components/Navigation.svelte';

    const skills: string[] = [
        'SvelteKit',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'HTML/CSS',
        'React',
        'Next.js',
    ];
</script>

{#key $locale}
<div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <Navigation />

    <div class="py-20">
        <div class="max-w-4xl mx-auto px-6">
            <Motion
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    let:motion
            >
                <h1 use:motion class="text-6xl font-display font-black text-white mb-10 uppercase tracking-wider text-glow">
                    {$_('about.title')}
                </h1>
            </Motion>

            <Motion
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    let:motion
            >
                <div use:motion class="card-gaming">
                    <p class="text-cyan-100 text-lg mb-6 font-gaming leading-relaxed">
                        {$_('about.description')}
                    </p>

                    <h2 class="text-3xl font-display font-bold text-cyan-400 mt-8 mb-6 uppercase tracking-wide">
                        {$_('about.skills')}
                    </h2>
                    <div class="flex flex-wrap gap-3">
                        {#each skills as skill, i}
                            <Motion
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                    let:motion
                            >
                <span
                        use:motion
                        class="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/50 text-cyan-300 px-6 py-3 rounded-lg font-gaming font-semibold uppercase text-sm hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer"
                >
                  {skill}
                </span>
                            </Motion>
                        {/each}
                    </div>
                </div>
            </Motion>
        </div>
    </div>
</div>

{/key}
