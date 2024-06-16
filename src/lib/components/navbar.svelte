<script lang="ts">
    import { page } from "$app/stores";
    
    $: currentPage = $page.route.id ?? "/";
    $: pageIndex = currentPage == "/"
            ? "Home"
            : currentPage[1].toUpperCase() + currentPage.slice(2);
    export let position:string;

    const navLinks:string[] = ["Home", "Members", "NaadGen", "Wiki", "Drive"];
</script>


<main class={position == "top" ? "hidden md:block" : "md:hidden"}>
    <div class="nav-links {position} dark {position == "top" ? "w-[50%]" : "w-[90%]"}">
        {#each navLinks as navLink}
            <a href={`/${navLink == "Home" ? "" : navLink.toLowerCase()}`} class:active={pageIndex == navLink}>{navLink}</a>
        {/each}
    </div>
</main>

<style>
    .nav-links {
        position: fixed;
        left: 50%; transform: translateX(-50%);
        backdrop-filter: blur(6px);
        display: flex;
        justify-content: space-around;
        border-radius: 10px;
        padding: 10px;
        z-index: 1000;
        transition: top 0.3s ease-in-out;
        transition: bottom 0.3s ease-in-out;
    }

    .bottom { bottom: 55px; }
    .top { top: 20px; }

    .dark { background: #1d2230b9 }
    .light { background: rgba(255, 255, 255, 0.5); }

    .active { font-weight: bolder; color: white; text-decoration: underline; }

    a {
        color: rgb(190, 190, 190);
        text-decoration: none;
        position: relative;
    }

    a.active::before, a.active:hover::before { all: unset; }

    a::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: rgba(255, 255, 255, 0.75);
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