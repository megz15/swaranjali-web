<script lang="ts">
    import { Avatar, Carousel, Blockquote } from "flowbite-svelte";
    import { fade } from "svelte/transition";

    import logo from "$lib/assets/logo.png";
    import quote_image from "$lib/assets/quote.png";

    import musicHeroOne from "$lib/assets/hero-bg/music_1_1.jpg";
    import musicHeroTwo from "$lib/assets/hero-bg/music_2.jpg";
    import musicHeroThree from "$lib/assets/hero-bg/music_3.jpg";

    import danceHeroOne from "$lib/assets/hero-bg/dance_1.jpg";
    import danceHeroTwo from "$lib/assets/hero-bg/dance_2.jpg";
    import danceHeroThree from "$lib/assets/hero-bg/dance_3.jpg";

    import MemberCard from "$lib/components/por_member_card.svelte";
    import memberData from "$lib/data/senate-members.json";

    const fadeAnimation = (x: Element) => fade(x, { duration: 300 });

    const images = [
        { src: musicHeroOne, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu" },
        { src: danceHeroOne, alt: "Waves 2023 Inauguration - Dayal Baba" },
        { src: musicHeroTwo, alt: "Crux 2023 Inauguration - Shailesh" },
        { src: danceHeroTwo, alt: "A" },
        { src: musicHeroThree, alt: "B" },
        { src: danceHeroThree, alt: "C" },
    ];
</script>

<svelte:head>
    <title>Swaranjali - Home</title>
</svelte:head>

<main>
    <!-- <NavBar pageIndex={0} position="top" /> -->

    <div class="absolute w-full h-full z-10">
        <img id="logo" src={logo} alt="Swaranjali" />
    </div>

    <Carousel
        {images}
        transition={fadeAnimation}
        let:Indicators
        let:Controls
        duration={3000}
        class="rounded-none shadow-lg shadow-black"
        style="height: 100vh;"
    >
        <Indicators />
        <Controls />
    </Carousel>

    <!-- on:change={({ detail }) => (image = detail)} -->
    <!-- <div id="caption" class="backdrop-blur-[2px]">
        {image?.alt}
    </div> -->

    <section class="backdrop-blur text-center shadow shadow-black">
        <figure class="mx-auto p-4 max-w-screen-md">
            <img class="mx-auto w-28" src={quote_image} alt="quote_image" />
            <Blockquote
                alignment="center"
                size="2xl"
                >"All art is good art.<br />All music is good music.<br />Don't
                be mean to people."</Blockquote
            >
            <figcaption class="flex justify-center items-center mt-6 space-x-3">
                <Avatar
                    rounded
                    src="https://i.imgur.com/hFdlFpH.png"
                    size="sm"
                />
                <div
                    class="flex items-center divide-x-2 divide-gray-500"
                >
                    <cite class="pr-3 font-medium text-sm md:text-base">Ramakrishna C</cite>
                    <cite class="pl-3 font-light  text-xs md:text-sm">Ex-Secretary (2022-23)</cite>
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
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Ruwudu:wght@500&display=swap");
    :global(body) {
        margin: 0;
        user-select: none;
    }
    #logo {
        filter: drop-shadow(0 0 5px black) drop-shadow(0 0 2em rgb(90, 90, 90));
        position: absolute;
        width: 300px;
        left: 50%;
        transform: translateX(-50%) translateY(75%);
        z-index: 1;
    }
    #members-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-block: 40px;
    }
</style>
