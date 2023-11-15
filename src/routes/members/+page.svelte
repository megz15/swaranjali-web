<script lang="ts">
    import MemberCard from "../../components/gen_member_card.svelte";
    import memberData from "$lib/data/members.json";
    import { Select } from 'flowbite-svelte';

    let selectedDomain = -1;
    const domain = [
        { value: -1, name: 'All'  },
        { value: 13, name: 'Music' },
        { value: 4, name: 'Dance' },
    ];

    let selectedBatch = -1;
    const batch = [
        { value: -1, name: 'All'  },
        { value: 23, name: '2023' },
        { value: 22, name: '2022' },
        { value: 21, name: '2021' },
        { value: 20, name: '2020' },
    ];

    let selectedPosition = -1;
    const position = [
        { value: -1, name: 'All'  },
        { value: 5, name: 'Enthusiast' },
        { value: 13, name: 'Member' },
        { value: 16, name: 'POR' },
        { value: 6, name: 'FOMO' },
    ];

</script>

<main class="pt-16 pb-8">

    <div class="flex justify-center gap-10 py-6">
        <Select items={domain} bind:value={selectedDomain} placeholder="Choose Domain" />
        <Select items={batch} bind:value={selectedBatch} placeholder="Choose Batch" />
        <Select items={position} bind:value={selectedPosition} placeholder="Choose Position" />
    </div>

    <div class="flex flex-wrap justify-center gap-5">
        {#each memberData as member, _}
            <MemberCard
                name = {member.name}
                id = {member.id}
                pfp_url={member.pfp_url}
                skill = {member.skill}
                contact = {member.contact}
                tags = {member.tags}
                text = {member.text}
            />
        {/each}
    </div>
</main>