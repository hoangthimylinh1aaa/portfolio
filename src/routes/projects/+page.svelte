<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { _, locale } from 'svelte-i18n';
  import Navigation from '$lib/components/Navigation.svelte';
  import { projectsData } from '$lib/data/projects';
  import { getGradientClass } from '$lib/utils/gradients';

  function getShortLabel(id: string) {
    return id.substring(0, 3).toUpperCase();
  }
</script>

<svelte:head>
  <title>{$_('projects.title')} | Portfolio</title>
</svelte:head>

{#key $locale}
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <Navigation />

    <div class="py-12 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Page Title -->
        <Motion
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          let:motion
        >
          <h1
            use:motion
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text mb-8 sm:mb-12 uppercase tracking-wider text-center drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            {$_('projects.title')}
          </h1>
        </Motion>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {#each projectsData as project, i (project.id)}
            <Motion
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              let:motion
            >
              <a
                href={`/projects/${project.id}`}
                use:motion
                class="card-gaming cursor-pointer group block h-full"
                aria-label={$_(`projects. items.${project.id}.title`) || project.id}
              >
                <!-- Project Image/Gradient - Use consistent gradient based on ID -->
                <div
                  class="h-48 bg-gradient-to-br {getGradientClass(
                    project.id
                  )} rounded-lg mb-4 relative overflow-hidden"
                >
                  <div
                    class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"
                  ></div>

                  <!-- Show image if exists, otherwise show text -->
                  {#if project.image}
                    <div class="absolute inset-0 flex isolate items-center justify-center p-8">
                      <img
                        src={project.image}
                        alt={$_(`projects.items.${project.id}.title`)}
                        class="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        class:mix-blend-multiply={project?.id === 'nvp' || project?.id === 'assa'}
                      />
                    </div>
                  {:else}
                    <div class="absolute inset-0 flex items-center justify-center">
                      <span
                        class="text-white font-display text-5xl font-black opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                      >
                        {#if $_(`projects.items.${project.id}.title`)}
                          {$_(`projects.items.${project.id}.title`).substring(0, 3).toUpperCase()}
                        {:else}
                          {getShortLabel(project.id)}
                        {/if}
                      </span>
                    </div>
                  {/if}

                  <!-- Position Badge -->
                  <div
                    class="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full"
                  >
                    <p class="text-cyan-300 font-gaming text-xs font-semibold">
                      {$_(`projects.items.${project.id}.position`) || ''}
                    </p>
                  </div>
                </div>

                <!-- Project Info -->
                <div class="space-y-3">
                  <h3
                    class="text-2xl font-display font-bold text-cyan-400 uppercase tracking-wide group-hover:text-cyan-300 transition-colors"
                  >
                    {$_(`projects.items.${project.id}.title`) || project.id}
                  </h3>

                  <p class="text-cyan-100 text-sm font-gaming line-clamp-3 leading-relaxed">
                    {$_(`projects.items.${project.id}.description`) || ''}
                  </p>

                  <!-- Technologies -->
                  <div class="flex flex-wrap gap-2">
                    {#each project.technologies.slice(0, 3) as tech}
                      <span
                        class="px-2 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded text-xs font-gaming font-semibold"
                      >
                        {tech}
                      </span>
                    {/each}
                    {#if project.technologies.length > 3}
                      <span
                        class="px-2 py-1 bg-gray-500/20 border border-gray-400/30 text-gray-300 rounded text-xs font-gaming font-semibold"
                      >
                        +{project.technologies.length - 3}
                      </span>
                    {/if}
                  </div>

                  <!-- View Project Button -->
                  <div class="pt-2">
                    <span
                      class="text-pink-400 group-hover:text-pink-300 font-gaming font-semibold uppercase text-sm inline-flex items-center gap-2 transition-colors"
                    >
                      {$_('projects.viewProject')}
                      <svg
                        class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </Motion>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/key}
