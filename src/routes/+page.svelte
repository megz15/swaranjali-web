<script lang="ts">

    import { Carousel } from 'flowbite-svelte';

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
    <NavBar pageIndex={0} position="top" />
    
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

    <div id="caption">
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
        bottom: 10%;
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
