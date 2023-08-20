<script lang="ts">
    import MemberCard from "../components/member_card.svelte";
    import NavBar from "../components/navbar.svelte";
</script>

<svelte:head>
    <title>Swaranjali - Home</title>
</svelte:head>

<main>
    <NavBar pageIndex={0} position="bottom" />

    <section id="hero-section">
        <figure>
            <center
                ><img
                    id="logo"
                    src="logo/swaranjali_logo_inverted_dotfix_removebg.png"
                    alt="Swaranjali"
                /></center
            >
            <figcaption>
                The Indian music and dance club of<br />Bits Pilani, Hyderabad
                Campus
            </figcaption>
        </figure>
    </section>

    <section id="about-section">
        <h1>About</h1>
        <p>Lorem Ipsum Dolor Sit Amet</p>
    </section>

    <section id="members-section">
        <MemberCard
            url="https://i.imgur.com/vnKRYIl.png"
            name="Meghraj Goswami"
            position="Music Head"
            tags={{ cat: "Music", bat: "2022", pos: "Enthusiast" }}
        />

        <MemberCard
            url="https://i.imgur.com/5MDyx3v.png"
            name="Onabheek Ghosh"
            position="Media Head"
            tags={{ cat: "Music", bat: "2022", pos: "Member" }}
        />

        <MemberCard
            url="https://i.imgur.com/3b4f5bZ.png"
            name="Manasvi Chervela"
            position="Treasurer"
            tags={{ cat: "Music", bat: "2022", pos: "Senate" }}
        />

        <MemberCard
            url="https://i.imgur.com/Y6JH6TX.png"
            name="Khushi Kamtam"
            position="Dance Head"
            tags={{ cat: "Dance", bat: "2022", pos: "Member" }}
        />

        <MemberCard
            url="https://i.imgur.com/WspOiaD.png"
            name="Mureta Primal"
            position="Secretary"
            tags={{ cat: "Music", bat: "2021", pos: "Senate" }}
        />
    </section>

    <section id="test-section">
        <h1>test</h1>
    </section>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Ruwudu:wght@500&display=swap");

    :global(body) {
        margin: 0;
        background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.8)), url("glyphs.png");
    }

    #logo {
        filter: drop-shadow(0 0 5px black) drop-shadow(0 0 2em rgb(90, 90, 90));
        width: 70%;
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

    #hero-section {
        background-image: linear-gradient(
                to bottom,
                transparent,
                rgba(0, 0, 0, 0.8)
            ),
            url("music/music_bg_2_crop.JPG"); /* 'dance/dance_bg_3_crop.JPG' */
        background-position: center;
        background-size: cover;
        height: 100vh;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #members-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 60px;
    }
</style>
