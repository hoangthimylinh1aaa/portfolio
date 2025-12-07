<script lang="ts">
    import { page } from '$app/stores';

    export let href: string;
    export let className: string = 'hover:text-indigo-600 transition';

    $: isActive = $page.url.pathname === href;
</script>

<a
        {href}
        class={className}
        class:active={isActive}
        aria-current={isActive ? 'page' : undefined}
>
    <slot />
</a>

<style>
    .active {
        font-weight: 600;
        color: rgb(79 70 229);
    }
</style>
