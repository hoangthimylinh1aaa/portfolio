<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { _, locale } from 'svelte-i18n';
  import Navigation from '$lib/components/Navigation.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const { project } = data;

  const gradients = [
    'from-cyan-500 via-blue-600 to-purple-500',
    'from-purple-500 via-pink-600 to-red-500',
    'from-green-500 via-teal-600 to-cyan-500',
    'from-yellow-500 via-orange-600 to-red-500',
    'from-indigo-500 via-purple-600 to-pink-500',
    'from-blue-500 via-cyan-600 to-teal-500',
  ];

  const gradientIndex = Math.floor(Math.random() * gradients.length);
</script>

<svelte:head>
  <title>{project.title} | Portfolio</title>
</svelte:head>

{#key $locale}
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <Navigation />

    <div class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <!-- Project Header -->
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          let:motion
        >
          <div use:motion class="card-gaming mb-8">
            <!-- Hero Image -->
            <div
              class="h-64 md:h-80 bg-gradient-to-br {gradients[
                gradientIndex
              ]} rounded-xl mb-6 relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <h1
                  class="text-6xl md:text-8xl font-display font-black text-white/20 uppercase tracking-wider"
                >
                  {project.title}
                </h1>
              </div>
            </div>

            <!-- Title and Position -->
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h1
                  class="text-4xl md:text-5xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-3 uppercase tracking-wide"
                >
                  {project.title}
                </h1>
                <p class="text-xl text-purple-400 font-gaming font-semibold">
                  {$_('projects.position')}: {project.position}
                </p>
              </div>

              {#if project.link && project.link !== '#'}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-gaming bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 inline-flex items-center gap-2"
                >
                  {$_('projects.viewLive')}
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
                  {$_('projects.teamSize')}: {project.teamSize}
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
                {project.description}
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
              {#each project.responsibilities as responsibility, i}
                <Motion
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
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
