<script lang="ts">

    import { Carousel, Blockquote } from 'flowbite-svelte';
    import { fade } from 'svelte/transition';

    import glyphImage from "$lib/assets/glyphs.png";
    import logo from "$lib/assets/logo.png";

    import musicHeroOne from "$lib/assets/hero-bg/music_1.jpg";
    import musicHeroTwo from "$lib/assets/hero-bg/music_2.jpg";
    import musicHeroThree from "$lib/assets/hero-bg/music_3.jpg";

    import danceHeroOne from "$lib/assets/hero-bg/dance_1.jpg";
    import danceHeroTwo from "$lib/assets/hero-bg/dance_2.jpg";
    import danceHeroThree from "$lib/assets/hero-bg/dance_3.jpg";

    import MemberCard from "$lib/components/por_member_card.svelte";
    import memberData from "$lib/data/senate-members.json";

    const fadeAnimation = (x: Element) => fade(x, { duration: 300 });

    const images = [
        {src: musicHeroOne, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu"},
        {src: danceHeroOne, alt: "Waves 2023 Inauguration - Dayal Baba"},
        {src: musicHeroTwo, alt: "Crux 2023 Inauguration - Shailesh"},
        {src: danceHeroTwo, alt: "A"},
        {src: musicHeroThree, alt: "B"},
        {src: danceHeroThree, alt: "C"},
    ];

    let image: {
        src: string;
        alt: string;
    };
</script>

<svelte:head>
    <title>Swaranjali - Home</title>
</svelte:head>

<main>
    <!-- <NavBar pageIndex={0} position="top" /> -->

    <img id="logo" src={logo} alt="Swaranjali" />

    <Carousel {images}
        transition={fadeAnimation}
        let:Indicators let:Controls
        duration={6000}
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

        <section class="backdrop-blur text-center">
            <figure class="mx-auto p-4 max-w-screen-md ">
                <img class="mx-auto mb-4" src="data:image/png;base64,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">
                <Blockquote alignment="center" size="3xl">"All art is good art.<br>All music is good music.<br>Don't be mean to people."</Blockquote>
                <figcaption class="flex justify-center items-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://i.imgur.com/hFdlFpH.png" />
                    <div class="flex items-center text-gray-900 divide-x-2 divide-gray-500">
                        <cite class="pr-3 font-medium">Ramakrishna C</cite>
                        <cite class="pl-3 text-sm font-light">Ex-Secretary (2022-23)</cite>
                    </div>
                </figcaption>
            </figure>
        </section>

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
        gap: 20px;
        padding-block: 40px;
    }
</style>
