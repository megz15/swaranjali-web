<script lang="ts">
    import MemberCard from "$lib/components/gen_member_card.svelte";
    import memberData from "$lib/data/members.json";
    import { Select } from 'flowbite-svelte';

    for (let i = memberData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [memberData[i], memberData[j]] = [memberData[j], memberData[i]];
    }

    let selectedDomain = 'All';
    const domain = [
        { value: 'All', name: 'All'  },
        { value: 'Dance', name: 'Dance' },
        { value: 'Music', name: 'Music' },
    ];

    let selectedBatch = 'All';
    const batch = [
        { value: 'All', name: 'All'  },
        { value: '2020', name: '2020' },
        { value: '2021', name: '2021' },
        { value: '2022', name: '2022' },
        { value: '2023', name: '2023' },
    ];

    let selectedPosition = 'All';
    const position = [
        { value: 'All', name: 'All'  },
        { value: 'Enthusiast', name: 'Enthusiast' },
        { value: 'Music', name: 'Member' },
        { value: 'FOMO', name: 'FOMO' },
        { value: 'POR', name: 'POR' },
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
            {#if
                (selectedDomain === 'All' || member.tags.cat === selectedDomain) &&
                (selectedBatch === 'All' || member.tags.bat === selectedBatch) &&
                (selectedPosition === 'All' || member.tags.pos === selectedPosition)
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