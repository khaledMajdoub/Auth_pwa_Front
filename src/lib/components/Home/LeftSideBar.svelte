<body class="to-blue-400 bg-gradient-to-bl sticky">
	<div
		class="sidebar fixed top-16 mt-1 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
	>
		<a
			href="/home/dashboard"
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
		>
			<i class="bi bi-house-door-fill" />
			<span class="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
		</a>
		<a
			href="/home/providers"
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
		>
			<i class="bi bi-bookmark-fill" />
			<span class="text-[15px] ml-4 text-gray-200 font-bold">Providers</span>
		</a>
		<div
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
		>
			<i class="bi bi-bookmark-fill" />
			<span class="text-[15px] ml-4 text-gray-200 font-bold">Blocks</span>
		</div>
		<div class="my-4 bg-gray-600 h-[1px]" />
		<div
			class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
		>
			<i class="bi bi-chat-left-text-fill" />
			<div class="flex justify-between w-full items-center">
				<span class="text-[15px] ml-4 text-gray-200 font-bold">Object Storage</span>
				<span class="text-sm rotate-180" id="arrow">
					<i class="bi bi-chevron-down" />
				</span>
			</div>
		</div>
		<div class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
			<h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
			<h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
			<h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
		</div>
	</div>
</body>
