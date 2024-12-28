<script>
    import "../app.postcss"
    import glyphImage from "$lib/assets/glyphs.png"

    import RadioPlayer from "$lib/components/radio_player.svelte"
    import NavBar from "$lib/components/navbar.svelte"
    import IntroModal from "$lib/components/intro_modal.svelte"
</script>

<IntroModal />

<NavBar position="top" />
<div class="md:hidden">
    <NavBar position="bottom" />
</div>

<RadioPlayer />

<div
    class="bg-fixed bg-center"
    style="
    background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.8)),
    url({glyphImage});"
>
    <slot />

    <div class="z-40 relative bg-[#1d2230b9] text-white backdrop-blur py-5 text-center">
        Made with 👣 and 💙 by <a href="https://github.com/megz15/" target="_blank" class="text-yellow-300 font-semibold transition duration-200 hover:text-orange-400">Meghraj Goswami</a>
    </div>
</div>