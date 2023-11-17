<script lang="ts">
    import "../app.postcss";
    import { Navbar, NavLi, NavUl, BottomNav, BottomNavItem, Footer } from "flowbite-svelte";
    import glyphImage from "$lib/assets/glyphs.png";
</script>

<div
    class="bg-fixed bg-center"
    style="
    background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.8)),
    url({glyphImage});"
>

    <Navbar let:NavContainer class="m-0 p-0">
        <NavContainer class="bg-[#1d2230b9] right-1/2 translate-x-1/2 rounded-lg fixed z-50 top-5 justify-around backdrop-blur w-min shadow shadow-black">
        <!-- <NavHamburger /> -->
        <NavUl>
            <NavLi class="text-white" href="/">Home</NavLi>
            <NavLi class="text-white" href="/members">Members</NavLi>
            <NavLi class="text-white" href="/naadgen">NaadGen</NavLi>
            <NavLi class="text-white" href="/drive">Drive</NavLi>
            <NavLi class="text-white" href="/social">Social</NavLi>
            <NavLi class="text-white" href="/recordings">Recordings</NavLi>
        </NavUl>
        </NavContainer>
    </Navbar>

    <div class="md:hidden">
        <BottomNav style="width: max-content; background-color: #1d2230b9; backdrop-filter: blur(8px); border-width: 0; border-radius: 6px;" position="fixed" classInner="grid-cols-3 text-white shadow shadow-black" navType="application">
            <BottomNavItem btnName="Home">
                H
            </BottomNavItem>
            <BottomNavItem btnName="Members">
                M
            </BottomNavItem>
            <BottomNavItem btnName="NaadGen">
                N
            </BottomNavItem>
            <!-- <BottomNavItem btnName="Drive">
                D
            </BottomNavItem>
            <BottomNavItem btnName="Social">
                S
            </BottomNavItem>
            <BottomNavItem btnName="Jam">
                R
            </BottomNavItem> -->
        </BottomNav>
    </div>

    <slot />

    <Footer class="h-16 flex items-center justify-center text-center bg-[#1d2230b9] text-white backdrop-blur">
        Made with 👣 and 💙 by <a href="https://github.com/megz15" class="pl-3 text-yellow-300 font-semibold transition duration-200 hover:text-orange-400">Meghraj Goswami</a>
    </Footer>

</div>