<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { _, locale } from 'svelte-i18n';
  import Navigation from '$lib/components/Navigation.svelte';
  import { getGradientClass } from '$lib/utils/gradients';
  import type { PageData } from './$types';

  export let data: PageData;
  const { project } = data;

  // Use the same gradient as in the list
  $: gradientClass = getGradientClass(project.id);
</script>

<svelte:head>
  <title>{$_(`projects.items.${project.id}.title`)} | Portfolio</title>
</svelte:head>

{#key $locale}
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <Navigation />

    <div class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <!-- Back Button -->
        <Motion
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          let:motion
        >
          <a
            href="/projects"
            use:motion
            class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-gaming font-semibold mb-8 transition-colors group"
          >
            <svg
              class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {$_('projects.backToProjects')}
          </a>
        </Motion>

        <!-- Project Header -->
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          let:motion
        >
          <div use:motion class="card-gaming mb-8">
            <!-- Hero Image / Gradient - Same as list -->
            <div
              class="h-64 md:h-80 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br {gradientClass}"
            >
              <div class="absolute inset-0 bg-black/30"></div>

              {#if project.image}
                <div class="absolute inset-0 flex items-center justify-center p-12">
                  <img
                    src={project.image}
                    alt={$_(`projects.items.${project.id}.title`)}
                    class="max-w-full max-h-full object-contain opacity-90"
                  />
                </div>
              {:else}
                <div class="absolute inset-0 flex items-center justify-center">
                  <h1
                    class="text-6xl md:text-8xl font-display font-black text-white/20 uppercase tracking-wider"
                  >
                    {$_(`projects.items.${project.id}. title`)}
                  </h1>
                </div>
              {/if}
            </div>

            <!-- Title and Position -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h1
                  class="text-4xl md:text-5xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-3 uppercase tracking-wide"
                >
                  {$_(`projects.items.${project.id}.title`)}
                </h1>
                <p class="text-xl text-purple-400 font-gaming font-semibold">
                  {$_('projects.position')}: {$_(`projects.items.${project.id}.position`)}
                </p>
              </div>

              {#if project.link && project.link !== '#'}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-gaming bg-gradient-to-r from-cyan-500 to-blue-600 text-white inline-flex items-center gap-2"
                >
                  {$_(`projects.items.${project.id}.linkLabel`)}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              {/if}
            </div>

            <!-- Meta Info -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div
                class="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-lg"
              >
                <p class="text-cyan-300 font-gaming font-semibold text-sm">
                  {$_('projects.teamSize')}: {$_(`projects.items.${project.id}. teamSize`)}
                  {$_('projects.people')}
                </p>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h2
                class="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-4 uppercase tracking-wide"
              >
                {$_('projects.projectDescription')}
              </h2>
              <p class="text-cyan-100 text-base md:text-lg font-gaming leading-relaxed">
                {$_(`projects.items.${project.id}.description`)}
              </p>
            </div>
          </div>
        </Motion>

        <!-- Technologies -->
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          let:motion
        >
          <div use:motion class="card-gaming mb-8">
            <h2
              class="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3"
            >
              <span class="text-purple-500">⚡</span>
              {$_('projects.technologies')}
            </h2>

            <div class="flex flex-wrap gap-3">
              {#each project.technologies as tech, i}
                <Motion
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  let:motion
                >
                  <div
                    use:motion
                    class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 text-purple-300 px-5 py-3 rounded-lg font-gaming font-semibold text-sm uppercase hover:border-purple-400 transition-all shadow-md hover:shadow-xl"
                  >
                    {tech}
                  </div>
                </Motion>
              {/each}
            </div>
          </div>
        </Motion>

        <!-- Responsibilities -->
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          let:motion
        >
          <div use:motion class="card-gaming">
            <h2
              class="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3"
            >
              <span class="text-cyan-500">✓</span>
              {$_('projects.responsibilities')}
            </h2>

            <ul class="space-y-4">
              {#each $_(`projects.items.${project.id}.responsibilities`) as responsibility, idx}
                <Motion
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  let:motion
                >
                  <li
                    use:motion
                    class="text-cyan-100 font-gaming flex items-start gap-4 text-sm md:text-base leading-relaxed"
                  >
                    <span class="text-cyan-400 text-xl flex-shrink-0 mt-1">▸</span>
                    <span class="flex-1">{responsibility}</span>
                  </li>
                </Motion>
              {/each}
            </ul>
          </div>
        </Motion>
      </div>
    </div>
  </div>
{/key}
