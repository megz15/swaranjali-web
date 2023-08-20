<script lang="ts">

    export let url:string;
    export let name:string;
    export let position:string;
    export let tags:memberTags;

    type memberTags = {
        cat: string,
        bat: string,
        pos: string,
    }

    let tagColours:memberTags = {cat: 'F4D8AA', bat: 'A4D8AA', pos: 'F4D8AA'};
</script>

<main>
    <div class="card">
        <img class="pfp" alt="member" src={url}>
        <h2>{name}</h2>
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
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;
        background-color: #12121F;
        color: #f3e9de;
        border-radius: 28px;
        box-shadow: 5px 5px 8px #12121F;
    }

    .pfp {
        width: 175px;
        border-radius: 50%;
    }

    h2 {
        margin-top: 24px;
        margin-bottom: 0;
        font-size: 28px;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 42px;
        font-size: 20px;
    }

    .tags {
        display: flex;
        gap: 10px;
    }

    .tags span {
        /* background-color: cyan; */
        color: black;
        padding: 8px 24px 8px 24px;
        border-radius: 8px;
    }
</style>