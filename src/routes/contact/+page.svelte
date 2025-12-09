<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { _, locale } from 'svelte-i18n';
  import Navigation from '$lib/components/Navigation.svelte';
  import { socialLinks } from '$lib/data/social';

  // SVG Icons cho social media
  const icons: Record<string, string> = {
    linkedin: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20. 542C0 23.227. 792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    telegram: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"/>
<path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#37BBFE"/>
<stop offset="1" stop-color="#007DBB"/>
</linearGradient>
</defs>
</svg>`,
  };
</script>

<svelte:head>
  <title>{$_('contact.title')} | Portfolio</title>
</svelte:head>

{#key $locale}
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    <Navigation />

    <div class="py-12 md:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Title -->
        <Motion
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          let:motion
        >
          <h1
            use:motion
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text mb-6 uppercase tracking-wider text-center drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            {$_('contact.title')}
          </h1>
        </Motion>

        <!-- Subtitle -->
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          let:motion
        >
          <p use:motion class="text-xl md:text-2xl text-cyan-300 text-center font-gaming mb-4">
            {$_('contact.subtitle')}
          </p>
        </Motion>

        <!-- Description -->
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          let:motion
        >
          <p
            use:motion
            class="text-base md:text-lg text-cyan-100 text-center font-gaming mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {$_('contact.description')}
          </p>
        </Motion>

        <!-- Social Links Grid -->
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          let:motion
        >
          <div use:motion class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {#each socialLinks as social, i}
              <Motion
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                let:motion
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  use:motion
                  class="card-gaming group relative overflow-hidden"
                >
                  <!-- Gradient Background -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br {social.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  ></div>

                  <!-- Content -->
                  <div class="relative flex items-center gap-6 p-6">
                    <!-- Icon -->
                    <div
                      class="w-16 h-16 flex-shrink-0 bg-gradient-to-br {social.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300 p-4"
                    >
                      {@html icons[social.icon]}
                    </div>

                    <!-- Text -->
                    <div class="flex-1">
                      <h3
                        class="text-2xl font-display font-bold text-cyan-400 uppercase tracking-wide group-hover:text-cyan-300 transition-colors"
                      >
                        {$_(`contact.socialLinks.${social.id}`)}
                      </h3>
                      <p class="text-sm text-cyan-200 font-gaming mt-1">
                        @{social.id}
                      </p>
                    </div>

                    <!-- Arrow Icon -->
                    <svg
                      class="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </a>
              </Motion>
            {/each}
          </div>
        </Motion>
      </div>
    </div>
  </div>
{/key}
