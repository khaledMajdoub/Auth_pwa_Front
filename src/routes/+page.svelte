<script lang="ts">
	import Login from '$lib/components/login/Login.svelte';
	export let form;
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if form?.incorrect}
	<p class="mt-3 text-red-500 text-center font-semibold">Invalid email/password</p>
{/if}
<Login />
