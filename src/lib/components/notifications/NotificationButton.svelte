<script lang="ts">
	import NotificationMenu from './NotificationMenu.svelte';

	let displayNotifications = false;
	const handleNotifications = () => {
		displayNotifications = !displayNotifications;
	};
</script>

<button
	on:click={handleNotifications}
	type="button"
	class="fixed right-12 top-5 rounded-full mx-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 z-50"
>
	<span class="absolute -inset-1.5" />
	<span class="sr-only">View notifications</span>
	<svg
		class="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
		/>
	</svg>
	{#if displayNotifications}
		<NotificationMenu />
	{/if}
</button>
