<script lang="ts">
    import "../app.postcss"
    import { Button, Modal, Popover } from "flowbite-svelte"
    import glyphImage from "$lib/assets/glyphs.png"

    import RadioPlayer from "$lib/components/radio_player.svelte"
    import NavBar from "$lib/components/navbar.svelte"

    import waLogo from "$lib/assets/social/whatsapp.png"
    import ghLogo from "$lib/assets/social/github.png"
    import igLogo from "$lib/assets/social/insta.png"
    import emLogo from "$lib/assets/social/mail.png"
</script>

<Modal class="dark" title="🚧 Swaranjali Web: Under Construction! 🚧" open autoclose outsideclose>
    <p>Welcome to Swaranjai Web! The site is still a work in progress (slow progress but progress nonetheless). As a solo developer in my third year, it might take some time to realize the final polished version.</p>
    <p>In the meantime, feel free to explore this partially built site and get a glimpse of what's to come :) (best viewed on larger screens for now)</p>
    <p>If you find bugs or have suggestions for improvement, <a href="https://github.com/megz15/swaranjali-web/issues" class="text-blue-600" target="_blank">reach out via a GitHub issue by clicking here.</a></p>
    <p>~ Meghraj</p>
    <svelte:fragment slot="footer">
        <Button>we got bro coding again before gta6</Button>
    </svelte:fragment>
</Modal>

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

        <NavBar position="bottom" />

        <!-- <BottomNav classOuter="w-max bg-[#1d2230b9] backdrop-blur border-0 rounded-lg shadow shadow-black h-28 text-xl" position="fixed" classInner="grid-cols-3 text-white" navType="application">
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
        </BottomNav> -->
    </div>

    <RadioPlayer />

    <slot />

    <div class="z-40 relative bg-[#1d2230b9] text-white backdrop-blur py-5 text-center">
        Made with 👣 and 💙 by<span id="megh" class="pl-3 text-yellow-300 font-semibold transition duration-200 hover:text-orange-400">Meghraj Goswami</span>

        <Popover triggeredBy="#megh" trigger="click" class="flex flex-col gap-5 items-center p-5 bg-[#1d2230b9] rounded-lg backdrop-blur shadow shadow-black border-2 border-gray-400">
            <div class="flex gap-2">
                <a href="https://www.github.com/megz15">
                    <img src="{ghLogo}" alt="GH" class="max-w-20">
                </a>
                <a href="https://www.instagram.com/megh.835">
                    <img src="{igLogo}" alt="IG" class="max-w-20">
                </a>
                <a href="https://wa.me/918383846288">
                    <img src="{waLogo}" alt="WA" class="max-w-20">
                </a>
                <a href="mailto:f20221869@hyderabad.bits-pilani.ac.in">
                    <img src="{emLogo}" alt="EM" class="max-w-20">
                </a>
            </div>
        </Popover>
    </div>

</div>