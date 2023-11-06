<script lang="ts">
	import NotificationButton from '$lib/components/notifications/NotificationButton.svelte';
	import logowhite from '$lib/assets/logowhite.png';
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Usermenu from '$lib/components/user/Usermenu.svelte';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	let display = false;

	const handleClick = () => {
		display = !display;
	};
</script>

<header>
	<title>Home</title>
</header>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>
{#if $page.url.pathname !== '/'}
	<div class="fixed top-0 w-screen z-50">
		<AppBar background="bg-gray-900" shadow="shadow-2xl" data-sveltekit-reload>
			<div class="flex items-center justify-between sm:ml-6 sm:block">
				<div class="flex items-center">
					<a href="/">
						<img src={logowhite} class="w-10" alt="huxium logo" />
					</a>
					<div class="ml-4 space-x-5 flex">
						<a
							href="/"
							class="text-white rounded-md px-3 py-2 text-sm font-medium duration-300 cursor-pointer hover:bg-blue-600 hover:text-white"
							>Option 1</a
						>
						<a
							href="/"
							class="text-white rounded-md px-3 py-2 text-sm font-medium duration-300 cursor-pointer hover:bg-blue-600 hover:text-white"
							>Option 2</a
						>
						<a
							href="/"
							class="text-white rounded-md px-3 py-2 text-sm font-medium duration-300 cursor-pointer hover:bg-blue-600 hover:text-white"
							>Option 3</a
						>
						<a
							href="/"
							class="text-white rounded-md px-3 py-2 text-sm font-medium duration-300 cursor-pointer hover:bg-blue-600 hover:text-white"
							>Option 4</a
						>
					</div>

					<button
						on:click={handleClick}
						type="button"
						class=" z-50 relative flex rounded-full hover:bg-gray-700 bg-gray-800 text-sm focus:outline-none focus:ring-5 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					>
						<Avatar
							class="fixed right-3 top-3 z-50 hover:border-black"
							width="w-12"
							border="border-4 border-surface-300-600-token"
							cursor="cursor-pointer"
						/>
					</button>
					<div class="fixed right-28">
						<LightSwitch bgDark="bg-surface-900" />
					</div>
					{#if display}
						<Usermenu />
					{/if}

					<NotificationButton />
				</div>
			</div>
		</AppBar>
	</div>
{/if}

<slot />
{#if $page.url.pathname !== '/'}
	<footer class="fixed bottom-0 w-screen bg-gray-900 text-white" />
{/if}
