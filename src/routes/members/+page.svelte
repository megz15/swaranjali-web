<script lang="ts">
    import MemberCard from "$lib/components/gen_member_card.svelte"
    import memberData from "$lib/data/members.json"
    import { Select, Card } from 'flowbite-svelte'
    import { onMount } from 'svelte'

    let selectedDomain = 'Domain'
    const domain = [
        { value: 'Domain', name: 'Domain'  },
        { value: 'Dance', name: 'Dance' },
        { value: 'Music', name: 'Music' },
    ]

    let selectedBatch = 'Batch'
    const batch = [
        { value: 'Batch', name: 'Batch'  },
        { value: '2020', name: '2020' },
        { value: '2021', name: '2021' },
        { value: '2022', name: '2022' },
        { value: '2023', name: '2023' },
        { value: '2024', name: '2024' },
    ]

    let selectedPosition = 'Position'
    const position = [
        { value: 'Position', name: 'Position'  },
        { value: 'Enthusiast', name: 'Enthusiast' },
        { value: 'Member', name: 'Member' },
        // { value: 'Former', name: 'Former' },
        { value: 'POR', name: 'POR' },
    ]

    let shuffledMembers = [...memberData]

    function shuffleArray(array: {
        name: string;
        id: string;
        pfp_url: string;
        skill: string;
        contact: {
            email: string;
            phone: string;
            github: string;
            insta: string;
        };
        tags: {
            cat: string;
            bat: string;
            pos: string;
        };
        text: string;
    }[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    onMount(() => shuffledMembers = shuffleArray([...memberData]))
</script>

<Card
    class="fixed z-[45] m-2 bg-[#1d2230b9] rounded-lg backdrop-blur shadow shadow-black md:bottom-0"
>
    <div class="h-28 flex flex-col justify-between">
        <Select class="h-8 py-0" items={domain} bind:value={selectedDomain} placeholder="Choose" />
        <div class="flex justify-center items-center">
            <Select class="h-8 py-0" items={batch} bind:value={selectedBatch} placeholder="Choose" />
            <div class="text-3xl cursor-pointer" on:click={() => shuffledMembers = shuffleArray([...memberData])}>🔀</div>
        </div>
        <Select class="h-8 py-0" items={position} bind:value={selectedPosition} placeholder="Choose" />
    </div>
</Card>

<main class="min-h-[calc(100vh-4rem)] pt-40 md:pt-20 pb-8">
    <div class="flex flex-wrap justify-center gap-5 items-stretch">
        {#each shuffledMembers as member}
            {#if
                (selectedDomain == 'Domain' || member.tags.cat == selectedDomain) &&
                (selectedBatch == 'Batch' || member.tags.bat == selectedBatch) &&
                (
                    selectedPosition == 'Position' || member.tags.pos == selectedPosition
                    || (selectedPosition == 'Member' || selectedPosition == 'POR')
                    && (member.tags.pos.endsWith('Head') || member.tags.pos.endsWith('Secretary') || member.tags.pos == 'Treasurer' || member.name == 'Meghraj Goswami')
                )
            }
                <MemberCard
                    name = {member.name}
                    id = {member.id}
                    pfp_url={member.pfp_url}
                    skill = {member.skill}
                    contact = {member.contact}
                    tags = {member.tags}
                    text = {member.text}
                />
            {/if}
        {/each}
    </div>
</main>