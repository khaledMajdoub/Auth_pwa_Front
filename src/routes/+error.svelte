<script>
	import { page } from '$app/stores';
</script>

<div class="h-screen from-white to-blue-300 bg-gradient-to-bl">
	<h1 class="fixed top-32 left-52 right-52 bottom-52">{$page.status} {$page.error?.message}</h1>
	<span style="font-size: 10em" class="fixed top-24 left-48 right-52 bottom-52">
		<section class="relative z-10 bg-primary py-[120px] card card-hover bg-blue-950">
			<div class="container mx-auto">
				<div class="-mx-4 flex">
					<div class="w-full px-4">
						<div class="mx-auto max-w-[400px] text-center">
							<h2
								class="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]"
							>
								404
							</h2>
							<h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">
								Oops! That page can’t be found
							</h4>
							<p class=" text-lg text-white">Check your route again and refresh</p>
							<a
								href="/home"
								class="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-blue-950"
							>
								Go To Home
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"
			>
				<div class="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
				<div class="flex h-full w-1/3">
					<div class="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
					<div class="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
				</div>
				<div class="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
			</div>
		</section>
	</span>
</div>
