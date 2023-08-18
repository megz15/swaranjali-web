<script lang="ts">
    //  export let pageIndex:number;

    const navLinks = ['Home', 'NaadGen', 'Gallery', 'Social', 'Recordings'];
</script>

<main>
    <div class="nav-links">
        {#each navLinks as navLink, index}
            <span>{navLink}</span>
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
</style>