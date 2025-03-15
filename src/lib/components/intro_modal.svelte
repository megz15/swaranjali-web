<script>
    let modalVisible = true
</script>

<div
    class={`fixed bottom-0 z-50 p-5 m-2 rounded-lg bg-[#1d2230b9] backdrop-blur shadow shadow-black border-2 border-gray-400 text-white sm:w-1/2 lg:w-1/3 h-1/2 overflow-auto [&>p:not(:last-child)]:mb-8 transition-opacity duration-1000 ease-in-out ${
        modalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
>
    <h1 class="text-xl text-center mb-8">🚧 Swaranjali Web 🚧<br>Under Construction!</h1>
    <button class="absolute top-4 right-4 text-2xl text-white" on:click={() => modalVisible = false}>❌</button>

    <p>Welcome to Swaranjai Web! The site is still a work in progress (slow progress but progress nonetheless). As a solo developer in my third year, it might take some time to realize the final polished version.</p>
    <p>In the meantime, feel free to explore this partially built site and get a glimpse of what's to come :) (best viewed on larger screens for now)</p>
    <p>If you find bugs or have suggestions for improvement, <a href="https://github.com/megz15/swaranjali-web/issues" class="text-blue-600" target="_blank">reach out via a GitHub issue by clicking here.</a></p>
    <p>~ Meghraj</p>
</div>
