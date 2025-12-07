<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { _ } from 'svelte-i18n';
    import Navigation from '$lib/components/Navigation.svelte';
    import type { Project } from '$lib/types/common';

    const projects: Project[] = [
        { key: 'ecommerce', link: '#' },
        { key: 'taskManager', link: '#' },
        { key: 'weather', link: '#' },
        { key: 'portfolio', link: '#' },
        { key: 'blog', link: '#' },
        { key: 'chat', link: '#' }
    ];
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <Navigation />

    <div class="py-20">
        <div class="max-w-7xl mx-auto px-6">
            <Motion
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    let:motion
            >
                <h1 use:motion class="text-6xl font-display font-black text-white mb-16 uppercase tracking-wider text-glow text-center">
                    {$_('projects.title')}
                </h1>
            </Motion>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each projects as project, i}
                    <Motion
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            whileTap={{ scale: 0.95 }}
                            let:motion
                    >
                        <div use:motion class="card-gaming cursor-pointer group">
                            <div class="h-48 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-lg mb-4 relative overflow-hidden">
                                <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-white font-display text-4xl font-black opacity-50 group-hover:opacity-100 transition-opacity">
                    {i + 1}
                  </span>
                                </div>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-cyan-400 mb-3 uppercase tracking-wide">
                                {$_(`projects.${project.key}. title`)}
                            </h3>
                            <p class="text-cyan-100 mb-4 font-gaming">
                                {$_(`projects. ${project.key}.description`)}
                            </p>
                            <a
                                    href={project.link}
                                    class="text-pink-400 hover:text-pink-300 font-gaming font-semibold uppercase text-sm inline-flex items-center gap-2 transition-colors"
                            >
                                {$_('projects.viewProject')}
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </Motion>
                {/each}
            </div>
        </div>
    </div>
</div>
