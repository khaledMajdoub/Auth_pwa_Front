<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	class="  z-10 mt-2 w-48 origin-top-right rounded-md fixed top-16 right-3 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
	role="menu"
	id="user-menu"
	aria-orientation="vertical"
	aria-labelledby="user-menu-button"
	tabindex="-1"
	transition:fade={{ delay: 100, duration: 50 }}
>
	<a
		href="/dashboard/profile"
		class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
		role="menuitem"
		tabindex="-1"
		id="user-menu-item-0"
	>
		Your Profile
	</a>
	<a
		href="/"
		class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
		role="menuitem"
		tabindex="-1"
		id="user-menu-item-1"
	>
		Settings
	</a>
	<a
		href="/"
		class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
		role="menuitem"
		tabindex="-1"
		id="user-menu-item-2"
	>
		Sign out
	</a>
</div>
