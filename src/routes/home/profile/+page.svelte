<script lang="ts">
	import Userhelp from './../../../lib/components/user/userportail/userhelp.svelte';
	import Usergeneral from '$lib/components/user/userportail/usergeneral.svelte';
	import Usersecurity from '$lib/components/user/userportail/usersecurity.svelte';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<div class="fixed top-20 left-80 flex-auto">
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<svelte:fragment slot="lead">General</svelte:fragment>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Security</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Help</Tab>

		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<Usergeneral />
			{:else if tabSet === 1}
				<Usersecurity />
			{:else if tabSet === 2}
				<Userhelp />
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
