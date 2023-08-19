<svelte:head>
    <title>Swaranjali - Home</title>
</svelte:head>

<script lang="ts">
    import NavBar from '../components/navbar.svelte';
</script>

<main>

    <NavBar pageIndex={0} position="bottom"/>

    <section id="hero-section">
        <figure>
            <center><img id="logo" src="logo/swaranjali_logo_inverted_dotfix_removebg.png" alt="Swaranjali"></center>
            <figcaption>The Indian music and dance club of<br>Bits Pilani, Hyderabad Campus</figcaption>
        </figure>
    </section>

    <section id="about-section">
        <h1>About</h1>
        <p>Lorem Ipsum Dolor Sit Amet</p>
    </section>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ruwudu:wght@500&display=swap');

    :global(body) { margin: 0; }

    #hero-section {
        background-image: linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(
              'music/music_bg_2_crop.JPG'
        ); /* 'dance/dance_bg_3_crop.JPG' */
        background-position: center;
        background-size: cover;
        height: 100vh;
        background-color: black;
        display: flex; justify-content: center; align-items: center;
    }

    #logo {
        filter: drop-shadow(0 0 5px black)  drop-shadow(0 0 2em rgb(90, 90, 90));
        width: 70%;
    }

    figcaption {
        filter: drop-shadow(0 0 3px black);
        padding: 20px;
        text-align: center;
        color: white;
        font-size: 26px;
        font-family: 'Ruwudu', serif;
    }

    @media (max-height: 475px) or (max-width: 340px){
        figcaption {
            display: none;
        }
    }
</style>