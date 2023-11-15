<script lang="ts">

    import { Card, Avatar, Badge } from 'flowbite-svelte';

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
    <Card padding="sm" class="w-[350px] bg-[#12121fcc] rounded-3xl backdrop-blur-sm border-0">
        <div class="flex flex-col items-center">
            <Avatar src={pfp_url} class="w-44 h-44" />
            <h5 on:click={spoofName} class="mt-8 mb-1 text-2xl font-medium text-white">{names[displayedNameIndex]}</h5>
            <span class="text-xl text-yellow-300">{position}</span>
            <div class="flex mt-8 space-x-3">
                <Badge large color="yellow" class="text-lg px-3">{tags.cat}</Badge>
                <Badge large color="green" class="text-lg px-3">{tags.bat}</Badge>
                <Badge large color="yellow" class="text-lg px-3">{tags.pos}</Badge>
            </div>
        </div>
    </Card>
</main>
