<script lang="ts">
	import { currentPage } from '$lib/components/login/store';
</script>

{#if $currentPage === 'passwordForgot'}
	<div
		class="flex-auto backdrop-blur-sm bg-white/30 shadow-lg border-slate-600 rounded-lg p-8 max-w-md mx-4 w-full"
	>
		<form method="post">
			<input
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
		</form>
	</div>
{/if}
