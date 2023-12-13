<script lang="ts">
    import "../app.postcss";
    import { BottomNav, BottomNavItem } from "flowbite-svelte";
    import glyphImage from "$lib/assets/glyphs.png";

    import RadioPlayer from "$lib/components/radio_player.svelte";
    import NavBar from "$lib/components/navbar.svelte";

    import { page } from "$app/stores";

</script>

<div
    class="bg-fixed bg-center"
    style="
    background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.8)),
    url({glyphImage});"
>

    <NavBar position="top" />

    <!-- <Navbar let:NavContainer class="m-0 p-0">
        <NavContainer class="bg-[#1d2230b9] right-1/2 translate-x-1/2 rounded-lg fixed z-50 top-5 justify-around backdrop-blur w-min shadow shadow-black">
        <NavUl nonActiveClass="text-white">
            <NavLi href="/">Home</NavLi>
            <NavLi href="/members">Members</NavLi>
            <NavLi href="/naadgen">NaadGen</NavLi>
            <NavLi href="/drive">Drive</NavLi>
            <NavLi href="/social">Social</NavLi>
            <NavLi href="/recordings">Recordings</NavLi>
        </NavUl>
        </NavContainer>
    </Navbar> -->

    <div class="md:hidden">
        <BottomNav classOuter="w-max bg-[#1d2230b9] backdrop-blur border-0 rounded-lg shadow shadow-black h-28 text-xl" position="fixed" classInner="grid-cols-3 text-white" navType="application">
            <BottomNavItem btnName="Home" href="/">
                🏠️
            </BottomNavItem>
            <BottomNavItem btnName="Members" href="/members">
                👥
            </BottomNavItem>
            <BottomNavItem btnName="NaadGen" href="/naadgen">
                🎵️
            </BottomNavItem>
            <BottomNavItem btnName="Drive" href="/drive">
                📁️
            </BottomNavItem>
            <BottomNavItem btnName="Social" href="/social">
                📱️
            </BottomNavItem>
            <BottomNavItem btnName="Recordings" href="/recordings">
                🎻
            </BottomNavItem>
        </BottomNav>
    </div>

    <RadioPlayer />

    <slot />

    <div class="h-16 flex items-center justify-center text-center bg-[#1d2230b9] text-white backdrop-blur">
        Made with 👣 and 💙 by <a href="https://github.com/megz15" class="pl-3 text-yellow-300 font-semibold transition duration-200 hover:text-orange-400">Meghraj Goswami</a>
    </div>

</div>