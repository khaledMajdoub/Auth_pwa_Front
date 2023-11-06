<script>
	import { Avatar, FileButton } from '@skeletonlabs/skeleton';
</script>

<div class="relative flex-auto">
	<div class="card p-4 bg-blue-200 backdrop-blur-lg shadow-2xl">
		<div class="ml-8">
			<span class="ml-4">Profile Picture</span>
			<Avatar
				src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
				width="w-32"
				rounded="rounded-full"
			/>
			<span class="text-gray-950 ml-4">change avatar</span>
			<FileButton name="files" />
		</div>
	</div>
	<div class="card p-4 mt-10 bg-blue-200 backdrop-blur-lg shadow-2xl">
		<div
			class="input-group input-group-divider grid-cols-[1fr_auto] rounded-lg border-blue-700 hover:border-blue-900 focus:border-blue-700"
		>
			<input type="text" placeholder="change your Username" />
			<a href="/" title="Username already in use.">submit</a>
		</div>
	</div>
</div>
