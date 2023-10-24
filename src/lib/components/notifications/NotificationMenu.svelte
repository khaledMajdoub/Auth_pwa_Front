<script>
	import { fade } from 'svelte/transition';
	let isOpen = false;

	function togglePanel() {
		isOpen = !isOpen;
	}
</script>

<div
	transition:fade={{ delay: 100, duration: 50 }}
	class="   transform transition-transform duration-300 fixed top-0 right-0 h-full w-64 bg-gray-900 text-white translate-x-0 mb-9 z-50"
>
	<div class="space-y-2 px-3">
		<div
			class="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800 mt-8 transform hover:scale-105 transition-transform"
		>
			<div class="flex items-center" />
			<div class="mt-2 text-sm text-gray-800 dark:text-gray-300">Notification</div>
			<div class="flex">
				<button
					class="text-gray-800 ml-16 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white"
					data-dismiss-target="#alert-additional-content-5"
					aria-label="Close"
				>
					Dismiss
				</button>
			</div>
		</div>
		<div
			class="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800 transform hover:scale-105 transition-transform"
		>
			<div class="flex items-center" />
			<div class="mt-2 text-sm text-gray-800 dark:text-gray-300">Notification</div>
			<div class="flex">
				<button
					class="text-gray-800 bg-transparent border ml-16 border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white"
					data-dismiss-target="#alert-additional-content-5"
					aria-label="Close"
				>
					Dismiss
				</button>
			</div>
		</div>
		<div
			class="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800 transform hover:scale-105 transition-transform"
		>
			<div class="flex items-center" />
			<div class="mt-2 text-sm text-gray-800 dark:text-gray-300">Notification</div>
			<div class="flex">
				<button
					class="text-gray-800 bg-transparent border ml-16 border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white"
					data-dismiss-target="#alert-additional-content-5"
					aria-label="Close"
				>
					Dismiss
				</button>
			</div>
		</div>
	</div>

	<div class="absolute bottom-4 right-4">
		<button
			class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mb-10 transition-colors mr-10"
			on:click={togglePanel}
		>
			Close Panel
		</button>
	</div>
</div>
