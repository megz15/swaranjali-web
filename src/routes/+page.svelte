<script lang="ts">
    import MemberCard from "../components/member_card.svelte";
    import NavBar from "../components/navbar.svelte";

    let bgImages = [
        "hero-bg/music_1.JPG",
        "hero-bg/dance_1.JPG",
        "hero-bg/music_2.JPG",
        "hero-bg/dance_2.JPG",
        "hero-bg/music_3.JPG",
        "hero-bg/dance_3.JPG",
        "hero-bg/dance_4.JPG",
    ];

    let glyphImage = "assets/glyphs.png"

    let bgImageIndex = 0;

    let memberData = [
        {
            pfp_url: "https://i.imgur.com/WspOiaD.png",
            position: "Secretary",
            tags: { cat: "Music", bat: "2021", pos: "Senate" },
            names: [
                "Muruga Perumal",
                "Merugoon Tirumal",
                "Margaya Perumal",
                "Bhag gaya Perumal",
                "Murmura Perumal",
                "Marunga Perumal",
                "Merugu Pidugu",
                "Merufeet Per-umal",
                "Margarita Perumal",
                "Mureta Primal",
            ],
        },
        {
            pfp_url: "https://i.imgur.com/5dKVI5o.png",
            position: "Joint Secretary",
            tags: { cat: "Music", bat: "2021", pos: "Senate" },
            names: [
                "Antara Ghosh",
                "Send Moms",
                "Antara Ghosh",
                "Send Mom",
            ],
        },
        {
            pfp_url: "https://i.imgur.com/3b4f5bZ.png",
            position: "Treasurer",
            tags: { cat: "Music", bat: "2022", pos: "Senate" },
            names: [
                "Manasvi Chervela",
                "Dopysvi Camera",
                "Controlzsvi",
                "Lampsvi Candela",
            ],
        },
        {
            pfp_url: "https://i.imgur.com/Y6JH6TX.png",
            position: "Dance Head",
            tags: { cat: "Dance", bat: "2022", pos: "Member" },
            names: ["Khushi Kamtam", "feeeeeeeeeet"],
        },
        {
            pfp_url: "https://i.imgur.com/1Q6CGcA.png",
            position: "Dance Head",
            tags: { cat: "Dance", bat: "2022", pos: "Member" },
            names: ["Aishwarya Reddy"],
        },
        {
            pfp_url: "https://i.imgur.com/cyYCTFG.png",
            position: "Media Head",
            tags: { cat: "Music", bat: "2022", pos: "Member" },
            names: ["Anvik Ghosh", "Onabheek"],
        },
        {
            pfp_url: "https://i.imgur.com/mKEgHSp.png",
            position: "Ex Joint Secretary",
            tags: { cat: "Dance", bat: "2020", pos: "FOMO" },
            names: ["Samyu Kamtam", "Real Manasvi Chervela"],
        },
        {
            pfp_url: "https://i.imgur.com/hFdlFpH.png",
            position: "Ex Secretary",
            tags: { cat: "Music", bat: "2020", pos: "FOMO" },
            names: ["Ramakrishna C", "Ramashankar D", "Balakrishna"],
        },
        {
            pfp_url: "https://i.imgur.com/nmaoCyr.png",
            position: "Music Head + Deverloper",
            tags: { cat: "Music", bat: "2022", pos: "Enthusiast" },
            names: [
                "Meghraj Goswami",
                "Meghlite Noswami",
                "Enthu (n=3)x",
                "feeeeeeeeeet",
                "Manoj Saroj",
                "Meghu Rajan",
                "Meghraj W Ami",
            ],
        },
    ];
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
                    src="logo/swaranjali_logo_inverted_dotfix_removebg.png"
                    alt="Swaranjali"
                /></center
            >
            <figcaption>
                The Indian music and dance club of<br />
                Bits Pilani, Hyderabad Campus
            </figcaption>
        </figure>
    </section>

    <div id="parallax-background" style="
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
