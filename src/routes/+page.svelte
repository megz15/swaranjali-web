<script lang="ts">

    import glyphImage from "$lib/assets/glyphs.png";
    import logo from "$lib/assets/logo.png";

    import MemberCard from "../components/member_card.svelte";
    import NavBar from "../components/navbar.svelte";
    import memberData from "$lib/data/senate-members.json";

    let bgImages = [
        "src/lib/assets/hero-bg/music_1.JPG",
        "src/lib/assets/hero-bg/dance_1.JPG",
        "src/lib/assets/hero-bg/music_2.JPG",
        "src/lib/assets/hero-bg/dance_3.JPG",
        "src/lib/assets/hero-bg/music_3.JPG",
        "src/lib/assets/hero-bg/dance_2.JPG",
    ];

    let bgImageIndex = 0;
</script>

<svelte:head>
    <title>Swaranjali - Home</title>
</svelte:head>

<main>
    <NavBar pageIndex={0} position="bottom" />

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <section
        id="hero-section"
        style="background-image: linear-gradient(
                to bottom,
                transparent,
                rgba(0, 0, 0, 0.8)
            ),
            url({bgImages[bgImageIndex]});"
        on:click={() => {
            bgImageIndex = (bgImageIndex + 1) % bgImages.length;
        }}
    >
        <figure>
            <center
                ><img
                    id="logo"
                    src={logo}
                    alt="Swaranjali"
                /></center
            >
            <figcaption>
                The Indian music and dance club of<br />
                Bits Pilani, Hyderabad Campus
            </figcaption>
        </figure>
    </section>

    <div
        id="parallax-background"
        style="
        background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.8)),
        url({glyphImage});"
    >
        <!-- <section id="about-section">
            <h1>About</h1>
            <p>Lorem Ipsum Dolor Sit Amet</p>
        </section> -->

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
        width: 70%;
        cursor: pointer;
    }

    figcaption {
        filter: drop-shadow(0 0 3px black);
        padding: 20px;
        text-align: center;
        color: white;
        font-size: 26px;
        font-family: "Ruwudu", serif;
    }

    @media (max-height: 475px) or (max-width: 340px) {
        figcaption {
            display: none;
        }
    }

    #parallax-background {
        background-attachment: fixed;
        background-position: center;
    }
    #hero-section {
        background-position: center;
        background-size: cover;
        height: 100vh;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 10px 20px black;
    }

    /* @media screen and (max-width: 400px) {
        #hero-section {
            background-size: contain;
            background-position: top;
        }
    } */

    #members-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 60px;
        padding-block: 40px;
    }
</style>
