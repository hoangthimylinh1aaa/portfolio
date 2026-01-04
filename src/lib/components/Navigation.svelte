<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { _ } from 'svelte-i18n';
  import { slide } from 'svelte/transition';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import NavLink from '$lib/components/NavLink.svelte';

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    document.body.style.overflowY = isMobileMenuOpen ? 'hidden' : 'auto';
  }

  const menuItems = [
    { href: '/', key: 'nav.home' },
    { href: '/about', key: 'nav.about' },
    { href: '/projects', key: 'nav.projects' },
    { href: '/contact', key: 'nav.contact' },
  ];
</script>

<Motion
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  let:motion
>
  <nav
    use:motion
    class="gaming-nav w-full relative p-4 md:p-6 flex justify-between items-center mx-auto sticky top-0 z-50"
  >
    <a
      href="/"
      class="text-2xl md:text-3xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase tracking-wider hover:opacity-80 transition-opacity"
    >
      Portfolio
    </a>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex items-center gap-8">
      <ul class="flex gap-8 font-gaming text-lg uppercase">
        {#each menuItems as item}
          <li>
            <NavLink
              href={item.href}
              className="text-cyan-300 hover:text-cyan-400 transition-colors"
            >
              {$_(item.key)}
            </NavLink>
          </li>
        {/each}
      </ul>
      <LanguageSwitcher />
    </div>

    <!-- Mobile Menu Button -->
    <div class="lg:hidden flex items-center gap-4">
      <LanguageSwitcher />
      <button
        on:click={toggleMobileMenu}
        class="text-cyan-300 cursor-pointer hover:text-cyan-400 transition-colors p-2"
        aria-label="Toggle menu"
      >
        {#if isMobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div
      transition:slide={{ duration: 300 }}
      class="fixed h-screen top-[72px] md:top-[88px] left-0 right-0 z-40 lg:hidden gaming-nav border-t border-cyan-500/30 overflow-hidden shadow-lg"
    >
      <ul class="flex flex-col gap-4 p-6 font-gaming text-lg uppercase">
        {#each menuItems as item, index}
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            let:motion
          >
            <li use:motion>
              <NavLink
                href={item.href}
                className="text-cyan-300 hover:text-cyan-400 transition-colors block py-2"
                on:click={toggleMobileMenu}
              >
                {$_(item.key)}
              </NavLink>
            </li>
          </Motion>
        {/each}
      </ul>
    </div>
  {/if}
</Motion>
