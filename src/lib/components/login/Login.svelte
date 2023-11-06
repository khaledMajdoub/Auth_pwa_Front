<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import Loginwith from './Loginwith.svelte';
	import PasswordForgotten from '$lib/components/passwordforgotten/PasswordForgotten.svelte';
	import { currentPage } from './store';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	$: displayLoginForm = true;
	$: isExpanded = false;
	let username = '';
	let password = '';

	function forgotPassword() {
		displayLoginForm = !displayLoginForm;

		if (!displayLoginForm) {
			currentPage.set('passwordForgot');
		}
	}
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
			localStorage.setItem('session', JSON.stringify({ userId: 123, username: 'example' }));
		} else {
			alert('login failed');
		}
	}
</script>

<header>
	<title>Login</title>
</header>
<div class="fixed bottom-1 right-2">
	<LightSwitch bgDark="bg-surface-900" />
</div>
<div class="flex items-center justify-center h-screen from-white to-blue-400 bg-gradient-to-bl">
	{#if displayLoginForm}
		<div
			class="backdrop-blur-sm bg-white/30 shadow-lg border-slate-600 rounded-lg p-8 max-w-md mx-4 w-full"
		>
			<img alt="The project logo" src={logo} class="w-20 mb-9 ml-36" />
			<form
				method="post"
				on:submit={handleLogin}
				data-sveltekit-preload-data
				data-sveltekit-keepfocus
			>
				<input
					class="input rounded-md focus:border-blue-800 bg-gray-200 hover:border-blue-500 mt-4 border-x border-y"
					title="username"
					name="username"
					id="username"
					type="text"
					bind:value={username}
					placeholder="username"
					autocomplete="username"
					required
				/>
				<input
					class="input rounded-md focus:border-blue-800 bg-gray-200 hover:border-blue-500 mt-4 border-x border-y"
					title="password"
					name="password"
					id="password"
					type="password"
					bind:value={password}
					placeholder="password"
					autocomplete="off"
					required
				/>

				<label class="flex items-center space-x-2 mt-4">
					<input
						class=" rounded-sm w-4 h-4 border-blue-950 bg-blue-100"
						type="checkbox"
						name="Remember me"
						checked
					/>
					<p>Remember Me</p>
				</label>

				<div class="flex justify-center mt-6">
					<button type="submit" class="btn bg-blue-950 text-white rounded-md mt-4 px-32"
						>Login</button
					>
				</div>
				<div class="flex justify-center">
					<div class="flex justify-center mt-4 underline">
						<a href="/" class="text-blue-950 text-xs font-bold" on:click={forgotPassword}
							>Forgot Your Password?</a
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
	{:else}
		<PasswordForgotten />
	{/if}
</div>
