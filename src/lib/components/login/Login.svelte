<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import Loginwith from './Loginwith.svelte';
	import { page } from '$app/stores';

	let isExpanded = false;
	let username = '';
	let password = '';
	function toggleExpansion() {
		isExpanded = !isExpanded;
	}
	async function handleLogin() {
		const response = await fetch('http://localhost:8080/users/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (response.ok) {
			alert('login successful');
		} else {
			alert('login failed');
		}
	}
</script>

<header>
	<title>Login</title>
</header>

<div class="flex items-center justify-center h-screen from-white to-blue-400 bg-gradient-to-bl">
	<div
		class="backdrop-blur-sm bg-white/30 shadow-lg border-slate-600 rounded-lg p-8 max-w-md mx-4 w-full"
	>
		<img alt="The project logo" src={logo} class="w-20 mb-9 ml-36" />
		<form method="post" on:submit={handleLogin}>
			<input
				class="input rounded-md focus:border-blue-800 bg-gray-200 hover:border-blue-500 mt-4 border-x border-y"
				title="username"
				type="text"
				bind:value={username}
				placeholder="username"
			/>
			<input
				class="input rounded-md focus:border-blue-800 bg-gray-200 hover:border-blue-500 mt-4 border-x border-y"
				title="password"
				type="password"
				bind:value={password}
				placeholder="password"
			/>

			<label class="flex items-center space-x-2 mt-4">
				<input class=" rounded-sm w-4 h-4 border-blue-950 bg-blue-100" type="checkbox" checked />
				<p>Remember Me</p>
			</label>

			<div class="flex justify-center mt-6">
				<button type="submit" class="btn bg-blue-950 text-white rounded-md mt-4 px-32">Login</button
				>
			</div>
			<div class="flex justify-center">
				<div class="flex justify-center mt-4 underline">
					<a
						href="/"
						class="text-blue-950 text-xs font-bold"
						aria-current={$page.url.pathname === '/passwordForgotten'}>Forgot Your Password?</a
					>
				</div>
			</div>
		</form>
		<hr class="w-60 h-0.5 mx-auto my-4 bg-blue-900 rounded md:my-10" />

		<button
			type="submit"
			class="btn bg-blue-950 text-white rounded-md mt-2 ml-2 px-32"
			on:click={toggleExpansion}
			>Continue With
		</button>
		{#if isExpanded}
			<Loginwith />
		{/if}
	</div>
</div>
