<script lang="ts">
    import { Avatar, Carousel, Blockquote, ButtonGroup, Button } from "flowbite-svelte"
    import { fade } from "svelte/transition"

    import logo from "$lib/assets/logo.png"
    import quote_image from "$lib/assets/quote.png"

    import musicHeroOne from "$lib/assets/opt-hero-bg/music_1_1.jpg"
    import musicHeroTwo from "$lib/assets/opt-hero-bg/music_2.jpg"
    import musicHeroThree from "$lib/assets/opt-hero-bg/music_3.jpg"

    import danceHeroOne from "$lib/assets/opt-hero-bg/dance_1.jpg"
    import danceHeroTwo from "$lib/assets/opt-hero-bg/dance_2.jpg"
    import danceHeroThree from "$lib/assets/opt-hero-bg/dance_3.jpg"

    import MemberCard from "$lib/components/por_member_card.svelte"
    import memberData2023 from "$lib/data/senate-members-2023.json"
    import memberData2024 from "$lib/data/senate-members-2024.json"
    import { onMount } from "svelte"

    const fadeAnimation = (x: Element) => fade(x, { duration: 300 })

    const images = [
        { src: musicHeroOne, alt: "Pearl 2023 Inauguration - Unnai Kaanadhu" },
        { src: danceHeroOne, alt: "Waves 2023 Inauguration - Dayal Baba" },
        { src: musicHeroTwo, alt: "Crux 2023 Inauguration - Shailesh" },
        { src: danceHeroTwo, alt: "A" },
        { src: musicHeroThree, alt: "B" },
        { src: danceHeroThree, alt: "C" },
    ]

    let selectedBatch = 2023
    let memberData = memberData2023
    let heroHeightStyle = "height: 100vh"

    function updateHeight() {
        heroHeightStyle = `height:${window.innerWidth<500?60:100}vh`
    }

    onMount(() => {
        updateHeight()
        window.addEventListener('resize', updateHeight)
        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    })
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
        duration={4000}
        class="rounded-none shadow-lg shadow-black"
        style={heroHeightStyle}
    >
        <Indicators />
        <Controls />
    </Carousel>

    <!-- on:change={({ detail }) => (image = detail)} -->
    <!-- <div id="caption" class="backdrop-blur-[2px]">
        {image?.alt}
    </div> -->

    <section class="bg-sky-50 text-center shadow shadow-black p-10">
        <p class="text-lg">The Indian Music and Classical Dance club of BITS Pilani, Hyderabad Campus</p>
        <p class="text-lg">-</p>
        <p class="text-lg">Lorem ipsum dolor sit amet</p>
    </section>

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

    <section class="flex flex-col my-5 gap-5 items-center">
        
        <ButtonGroup class="text-lg">
            <Button class="text-xl px-10 py-3" color={selectedBatch == 2024 ? "purple" : "dark"} on:click={
                () => {
                    selectedBatch = 2024
                    memberData = memberData2024
                }
            }>2024</Button>
            <Button class="text-xl px-10 py-3" color={selectedBatch == 2023 ? "purple" : "dark"} on:click={
                () => {
                    selectedBatch = 2023
                    memberData = memberData2023
                }
            }>2023</Button>
        </ButtonGroup>

        <section class="flex flex-wrap justify-center gap-5">

            {#if selectedBatch == 2024}
                <MemberCard
                    pfp_url="https://i.imgur.com/uoJcpoY.png"
                    position="Overlord Supreme"
                    tags={{
                        cat: "T",
                        bat: "B",
                        pos: "A"
                    }}
                    names={["Tux"]}
                />
            {:else}
                {#each memberData as member}
                    <MemberCard
                        pfp_url={member.pfp_url}
                        position={member.position}
                        tags={member.tags}
                        names={member.names}
                    />
                {/each}
            {/if}
        </section>
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
</style>
