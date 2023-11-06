<script lang="ts">
	import Cards from '$lib/components/Home/Cards.svelte';
	export let data;
</script>

<div class=" bg-black" />
<svelte:head>
	<title>{data.visited ? 'Wecome' : ' back'}</title>
</svelte:head>
<Cards />
