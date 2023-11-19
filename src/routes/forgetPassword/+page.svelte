<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { inputStore, setInput } from '$src/stores';
	let currentRoute = '/forgetPassword';

	onMount(() => {
		const storedInput = localStorage.getItem('input');
		if (storedInput) {
			setInput(storedInput);
		}

		const unsubscribe = inputStore.subscribe((value) => {
			localStorage.setItem('input', value);
		});

		if ($page.url.pathname == currentRoute) {
			localStorage.removeItem('input');
			setInput('');
			console.log('input removed');
		}

		return () => unsubscribe();
	});
</script>

<svelte:head>
	<title>Reset Password</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex items-center justify-center h-screen from-white to-blue-400 bg-gradient-to-bl">
	<div
		class="flex-auto backdrop-blur-sm bg-white/30 shadow-lg border-slate-600 rounded-lg p-8 max-w-md mx-4 w-full"
		data-sveltekit-preload-code
	>
		<form>
			<input
				bind:value={$inputStore}
				class="input rounded-md focus:border-blue-800 bg-gray-200 hover:border-blue-500 mt-4 border-x border-y"
				title="username"
				type="text"
				name="username"
				autocomplete="username"
				placeholder="username or email"
			/>

			<div class="flex justify-center mt-6">
				<button type="submit" class="btn bg-blue-950 text-white rounded-md mt-4 px-24"
					>Reset Your Password
				</button>
			</div>
			<a href="/" class="flex mt-2 underline font-extralight text-sm justify-center"> login </a>
		</form>
	</div>
</div>
