<script lang="ts">

    import { Carousel } from 'flowbite-svelte';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;


    import glyphImage from "$lib/assets/glyphs.png";
    import logo from "$lib/assets/logo.png";

    import musicHeroOne from "$lib/assets/hero-bg/music_1.jpg";
    import musicHeroTwo from "$lib/assets/hero-bg/music_2.jpg";
    import musicHeroThree from "$lib/assets/hero-bg/music_3.jpg";

    import danceHeroOne from "$lib/assets/hero-bg/dance_1.jpg";
    import danceHeroTwo from "$lib/assets/hero-bg/dance_2.jpg";
    import danceHeroThree from "$lib/assets/hero-bg/dance_3.jpg";

    import MemberCard from "../components/member_card.svelte";
    import NavBar from "../components/navbar.svelte";
    import memberData from "$lib/data/senate-members.json";

    const images = [
        {src: musicHeroOne, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
        {src: danceHeroOne, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
        {src: musicHeroTwo, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
        {src: danceHeroTwo, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
        {src: musicHeroThree, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
        {src: danceHeroThree, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
    ];

    let index = 0;
    let image;
</script>

<svelte:head>
    <title>Swaranjali - Home</title>
</svelte:head>

<main>
    <!-- <NavBar pageIndex={0} position="top" /> -->

    <Sidebar {activeUrl} class="fixed z-10 bottom-10 right-10 backdrop-blur">
        <SidebarWrapper class="rounded-xl bg-[#1d2230b9]">
        <SidebarGroup>
            <SidebarItem class="text-white" label="Home" href="/" />
            <SidebarItem class="text-white" label="Members" href="/members" />
            <SidebarItem class="text-white" label="NaadGen" href="/naadgen" />
            <SidebarItem class="text-white" label="Drive" href="/drive" />
            <SidebarItem class="text-white" label="Social" href="/social" />
            <SidebarItem class="text-white" label="Recordings" href="/recordings" />
        </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>

    <Navbar let:NavContainer class="m-0 p-0">
        <NavContainer class="w-4/5 rounded-lg bg-[#1d2230b9] fixed z-10 mt-20 flex-initial justify-around backdrop-blur">
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

    <img id="logo" src={logo} alt="Swaranjali" />

    <Carousel {images}
        let:Indicators let:Controls
        duration="6000"
        on:change={({ detail }) => (image = detail)}
        class="rounded-none shadow-lg shadow-black"
        style="height: 100vh;"
    >
        <Indicators />
        <Controls />
    </Carousel>

    <div id="caption" class="backdrop-blur-[2px]">
        {image?.alt}
    </div>

    <div
        id="parallax-background"
        style="
        background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.8)),
        url({glyphImage});"
    >

        <section id="members-section">
            {#each memberData as member, i}
                <MemberCard
                    pfp_url={member.pfp_url}
                    position={member.position}
                    tags={member.tags}
                    names={member.names}
                />
            {/each}
        </section>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Ruwudu:wght@500&display=swap");

    :global(body) {
        margin: 0;
        user-select: none;
    }

    #logo {
        filter: drop-shadow(0 0 5px black) drop-shadow(0 0 2em rgb(90, 90, 90));
        position: absolute; width: 300px;
        left: 50%; transform: translateX(-50%) translateY(75%);
        z-index: 1;
    }

    #parallax-background {
        background-attachment: fixed;
        background-position: center;
    }

    #caption {
        position: absolute;
        bottom: 14px;
        width: 100%;
        filter: drop-shadow(0 0 3px black);
        padding: 20px;
        text-align: center;
        color: white;
        font-size: 26px;
        font-family: "Ruwudu", serif;
        background-color: rgb(0,0,0,0.4);
    }

    #members-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 60px;
        padding-block: 40px;
    }
</style>
