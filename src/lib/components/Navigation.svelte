<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { _ } from 'svelte-i18n';
    import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
    import NavLink from '$lib/components/NavLink.svelte';
</script>

<Motion
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        let:motion
>
    <nav use:motion class="gaming-nav p-6 flex justify-between items-center max-w-7xl mx-auto sticky top-0 z-50">
        <h1 class="text-3xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase tracking-wider">
            Portfolio
        </h1>
        <div class="flex items-center gap-8">
            <ul class="flex gap-8 font-gaming text-lg uppercase">
                <li>
                    <NavLink href="/" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                        {$_('nav.home')}
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/about" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                        {$_('nav.about')}
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/projects" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                        {$_('nav.projects')}
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/contact" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                        {$_('nav.contact')}
                    </NavLink>
                </li>
            </ul>
            <LanguageSwitcher />
        </div>
    </nav>
</Motion>
