<script lang="ts">
     export let pageIndex:number;

    const navLinks = ['Home', 'NaadGen', 'Gallery', 'Social', 'Recordings'];
</script>

<main>
    <div class="nav-links">
        {#each navLinks as navLink, index}
            <a href={`/${navLink.toLowerCase()}`} class:active={pageIndex == index}>{navLink}</a>
        {/each}
    </div>
</main>

<style>
    .nav-links {
        position: fixed;
        bottom: 20px;
        width: 80%;
        left: 50%; transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(6px);
        display: flex;
        justify-content: space-around;
        border-radius: 10px;
        padding: 10px;
    }

    .active {
        font-weight: bold;
    }

    a {
        color: black;
        text-decoration: none;
        position: relative;
    }

    a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: black;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
</style>