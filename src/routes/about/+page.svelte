<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { _, locale } from 'svelte-i18n';
    import Navigation from '$lib/components/Navigation.svelte';
    import type { Skill, SkillCategory } from '$lib/types/common';

    // Skills Data
    const skillsData: Skill[] = [
        // Library
        { name: 'React. js', category: 'library' },
        { name: 'Three.js', category: 'library' },
        { name: 'React-native', category: 'library' },
        { name: 'Svelte', category: 'library' },

        // Framework
        { name: 'Next.js', category: 'framework' },
        { name: 'SvelteKit', category: 'framework' },
        { name: 'Fastify', category: 'framework' },

        // Programming Language
        { name: 'HTML', category: 'language' },
        { name: 'CSS', category: 'language' },
        { name: 'JavaScript', category: 'language' },
        { name: 'TypeScript', category: 'language' },
        { name: 'Python', category: 'language' },

        // State Library
        { name: 'Redux', category: 'stateLibrary' },
        { name: 'Redux Toolkit', category: 'stateLibrary' },
        { name: 'React-query', category: 'stateLibrary' },
        { name: 'Zustand', category: 'stateLibrary' },
        { name: 'MobX', category: 'stateLibrary' },

        // Style Library
        { name: 'Tailwind CSS', category: 'styleLibrary' },
        { name: 'Bootstrap', category: 'styleLibrary' },
        { name: 'Ant Design', category: 'styleLibrary' },
        { name: 'Material-UI', category: 'styleLibrary' },
        { name: 'Shadcn UI', category: 'styleLibrary' },

        // Cloud & DevOps
        { name: 'AWS', category: 'cloud' },
        { name: 'GitHub', category: 'cloud' },
        { name: 'GitLab', category: 'cloud' },
        { name: 'Bitbucket', category: 'cloud' },

        // Other Tools
        { name: 'GIT', category: 'tools' },
        { name: 'JIRA', category: 'tools' },

        // Certification
        { name: 'AWS SAA', category: 'certification' },
    ];

    const categories: SkillCategory[] = [
        'library',
        'framework',
        'language',
        'stateLibrary',
        'styleLibrary',
        'cloud',
        'tools',
        'certification',
    ];

    const educationKeys = ['dnu'];

    function getSkillsByCategory(category: SkillCategory): Skill[] {
        return skillsData.filter((skill) => skill.category === category);
    }

    function getColorByCategory(category: SkillCategory): string {
        const colors: Record<SkillCategory, string> = {
            library: 'from-cyan-500/20 to-blue-500/20 border-cyan-400/50 text-cyan-300 hover:border-cyan-400',
            framework:
                'from-purple-500/20 to-pink-500/20 border-purple-400/50 text-purple-300 hover:border-purple-400',
            language:
                'from-green-500/20 to-emerald-500/20 border-green-400/50 text-green-300 hover:border-green-400',
            stateLibrary:
                'from-yellow-500/20 to-orange-500/20 border-yellow-400/50 text-yellow-300 hover:border-yellow-400',
            styleLibrary:
                'from-pink-500/20 to-rose-500/20 border-pink-400/50 text-pink-300 hover:border-pink-400',
            cloud:
                'from-blue-500/20 to-indigo-500/20 border-blue-400/50 text-blue-300 hover:border-blue-400',
            tools:
                'from-gray-500/20 to-slate-500/20 border-gray-400/50 text-gray-300 hover:border-gray-400',
            certification:
                'from-amber-500/20 to-yellow-500/20 border-amber-400/50 text-amber-300 hover:border-amber-400',
        };
        return colors[category];
    }
</script>

<svelte:head>
    <title>{$_('about.title')} | Portfolio</title>
</svelte:head>

{#key $locale}
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />

        <div class="py-12 md:py-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <!-- Page Title -->
                <Motion
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        let:motion
                >
                    <h1
                            use:motion
                            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text mb-8 sm:mb-12 uppercase tracking-wider text-center drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    >
                        {$_('about.title')}
                    </h1>
                </Motion>

                <!-- Description -->
                <Motion
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        let:motion
                >
                    <div use:motion class="card-gaming mb-12">
                        <p class="text-cyan-100 text-base md:text-lg font-gaming leading-relaxed">
                            {$_('about.description')}
                        </p>
                    </div>
                </Motion>



                <!-- Skills Section -->
                <section class="mb-16">
                    <Motion
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            let:motion
                    >
                        <h2
                                use:motion
                                class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cyan-400 mb-8 uppercase tracking-wide flex items-center gap-3"
                        >
                            <span class="text-cyan-500">⚡</span>
                            {$_('about.skills')}
                        </h2>
                    </Motion>

                    <!-- Skills by Category -->
                    <div class="space-y-10">
                        {#each categories as category, catIndex}
                            {@const categorySkills = getSkillsByCategory(category)}
                            {#if categorySkills.length > 0}
                                <Motion
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 + catIndex * 0.1 }}
                                        let:motion
                                >
                                    <div use:motion>
                                        <h3
                                                class="text-xl md:text-2xl font-gaming font-semibold text-purple-400 mb-5 uppercase tracking-wide"
                                        >
                                            {$_(`about.categories.${category}`)}
                                        </h3>

                                        <div class="flex flex-wrap gap-3">
                                            {#each categorySkills as skill, i}
                                                <Motion
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.4, delay: 0.7 + catIndex * 0.1 + i * 0.05 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        let:motion
                                                >
                                                    <div
                                                            use:motion
                                                            class="bg-gradient-to-r {getColorByCategory(
                              category
                            )} border-2 px-4 md:px-5 py-2. 5 md:py-3 rounded-lg font-gaming font-semibold text-xs md:text-sm uppercase transition-all cursor-pointer relative shadow-md hover:shadow-xl"
                                                    >
                                                        {skill. name}

                                                    </div>
                                                </Motion>
                                            {/each}
                                        </div>
                                    </div>
                                </Motion>
                            {/if}
                        {/each}
                    </div>
                </section>

                <!-- Education Section -->
                <section class="mb-16">
                    <Motion
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            let:motion
                    >
                        <h2
                                use:motion
                                class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cyan-400 mb-8 uppercase tracking-wide flex items-center gap-3"
                        >
                            <span class="text-cyan-500">🎓</span>
                            {$_('about.education')}
                        </h2>
                    </Motion>

                    {#each educationKeys as eduKey, eduIndex}
                        <Motion
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + eduIndex * 0.1 }}
                                let:motion
                        >
                            <div use:motion class="card-gaming  hover:border-cyan-300 transition-colors">
                                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                    <div class="flex-1">
                                        <h3 class="text-2xl md:text-3xl font-display font-bold text-cyan-300 mb-2">
                                            {$_(`about.educationData.${eduKey}.institution`)}
                                        </h3>
                                        <p class="text-purple-400 font-gaming font-semibold text-lg">
                                            {$_(`about.educationData.${eduKey}.degree`)}
                                        </p>
                                    </div>
                                    <div
                                            class="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg w-fit"
                                    >
                                        <p class="text-cyan-300 font-gaming font-semibold text-sm whitespace-nowrap">
                                            {$_(`about.educationData.${eduKey}.period`)}
                                        </p>
                                    </div>
                                </div>

                                <ul class="space-y-3 mt-6">
                                    {#each $_(`about.educationData.${eduKey}.description`) as desc}
                                        <li class="text-cyan-100 font-gaming flex items-start gap-3 text-sm md:text-base">
                                            <span class="text-cyan-400 text-xl">▸</span>
                                            <span class="flex-1">{desc}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </Motion>
                    {/each}
                </section>
            </div>
        </div>
    </div>
{/key}
