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

    function spoofName() {
        // displayedName = names[Math.floor(Math.random() * names.length)];
        displayedNameIndex = (displayedNameIndex + 1) % names.length;
    }
</script>

<main>
    <div class="block max-w-sm p-6 h-full w-[350px] bg-[#12121fcc] rounded-3xl backdrop-blur-sm border-0">
        <div class="flex flex-col items-center">
            <img src={pfp_url} alt={names[0]} class="rounded-2xl w-44 h-44 mt-3" />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <h5 on:click={spoofName} class="mt-8 mb-1 text-2xl font-medium text-white">{names[displayedNameIndex]}</h5>
            <span class="text-xl text-yellow-300">{position}</span>
            <div class="flex mt-6 mb-5 space-x-3">
                <div class="bg-yellow-100 text-yellow-800 font-medium py-0.5 rounded h-8 text-lg px-3">{tags.cat}</div>
                <div class="bg-green-100 text-green-800 font-medium py-0.5 rounded h-8 text-lg px-3">{tags.bat}</div>
                <div class="bg-yellow-100 text-yellow-800 font-medium py-0.5 rounded h-8 text-lg px-3">{tags.pos}</div>
            </div>
        </div>
    </div>
</main>
