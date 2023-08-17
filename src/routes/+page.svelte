<main>
    <section id="hero-section">
        <figure>
            <center><img id="logo" src="swaranjali_logo_inverted_dotfix_removebg.png" alt="Swaranjali"></center>
            <figcaption>The Indian music and dance club of<br>Bits Pilani, Hyderabad Campus.</figcaption>
        </figure>
    </section>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ruwudu:wght@500&display=swap');

    :global(body) { margin: 0; padding: 0; } 

    #hero-section {
        background-image: url( 'bg_cropped.png' );
        background-position: center;
        background-size: cover;
        height: 100vh;
        background-color: black;
        display: flex; justify-content: center; align-items: center;
    }

    #logo {
        filter: drop-shadow(0 0 1em rgb(128, 128, 128));
        width: 70%;
    }

    figcaption {
        filter: drop-shadow(0 0 5px black);
        padding: 20px;
        text-align: center;
        color: white;
        font-size: 26px;
        font-family: 'Ruwudu', serif;
    }
</style>