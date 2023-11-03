<script lang="ts">
    export let pfp_url: string;
    export let names: string[];
    export let position: string;
    export let tags: memberTags;

    let displayedNameIndex = 0;

    type memberTags = {
        cat: string;
        bat: string;
        pos: string;
    };

    let tagColours: memberTags = {
        cat: "F4D8AA",
        bat: "A4D8AA",
        pos: "F4D8AA",
    };

    function spoofName() {
        // displayedName = names[Math.floor(Math.random() * names.length)];
        displayedNameIndex = (displayedNameIndex + 1) % names.length;
    }
</script>

<main>
    <div class="card">
        <img class="pfp" alt="member" src={pfp_url} />
        <h2 on:click={spoofName}>{names[displayedNameIndex]}</h2>
        <h3>{position}</h3>
        <div class="tags">
            {#each Object.keys(tags) as k}
                <span style="background-color: #{tagColours[k]}">
                    {tags[k]}
                </span>
            {/each}
        </div>
    </div>
</main>

<style>

    * {
        user-select: none;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 400px;
        background-color: rgb(18, 18, 31, 0.8);
        backdrop-filter: blur(6px);
        color: #f3e9de;
        border-radius: 28px;
        box-shadow: 5px 5px 8px rgb(18, 18, 31, 0.8);
    }

    .pfp {
        width: 175px;
        border-radius: 50%;
    }

    h2 {
        margin: 24px 0 0;
        font-size: 28px;
    }

    h2:hover {
        cursor: pointer;
    }

    h3 {
        margin: 0 0 42px;
        font-size: 20px;
        color: #ffde59;
    }

    .tags {
        display: flex;
        gap: 10px;
    }

    .tags span {
        color: black;
        padding: 8px 24px 8px 24px;
        border-radius: 8px;
    }
</style>
