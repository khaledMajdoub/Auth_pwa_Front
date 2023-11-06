<script lang="ts">
	import { currentPage } from '$lib/components/login/store';
	import ConfirmNewPassword from './ConfirmNewPassword.svelte';
	let passwordforgottenform = false;

	function forgotPassword() {
		passwordforgottenform = !passwordforgottenform;

		if (passwordforgottenform) {
			currentPage.set('passwordForgot');
		}
	}
</script>

{#if passwordforgottenform}
	<ConfirmNewPassword />
{:else}
	<div
		class="flex-auto backdrop-blur-sm bg-white/30 shadow-lg border-slate-600 rounded-lg p-8 max-w-md mx-4 w-full"
		data-sveltekit-preload-code
	>
		<form>
			<input
				class="input rounded-md focus:border-blue-800 bg-gray-200 hover:border-blue-500 mt-4 border-x border-y"
				title="username"
				type="text"
				name="username"
				autocomplete="username"
				placeholder="username or email"
			/>

			<div class="flex justify-center mt-6">
				<button
					on:click={forgotPassword}
					type="submit"
					class="btn bg-blue-950 text-white rounded-md mt-4 px-24"
					>Reset Your Password
				</button>
			</div>
			<a href="/" class="flex mt-2 underline font-extralight text-sm justify-center"> login </a>
		</form>
	</div>
{/if}
