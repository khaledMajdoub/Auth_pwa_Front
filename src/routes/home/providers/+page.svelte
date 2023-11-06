<script lang="ts">
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ label: 'blue', color: ['blue', 800], start: 0, end: 10 },
		{ label: 'gray', color: ['gray', 400], start: 10, end: 35 },
		{ label: 'blue', color: ['blue', 800], start: 35, end: 100 }
	];
</script>

<div class="mt-60 ml-32">
	<ConicGradient stops={conicStops} spin>Providers Loading</ConicGradient>
</div>
