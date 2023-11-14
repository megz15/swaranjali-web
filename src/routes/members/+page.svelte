<script lang="ts">
    import MemberCard from "../../components/member_card.svelte";
    import memberData from "$lib/data/senate-members.json";
</script>

<main>
    <section class="flex flex-wrap justify-center gap-5 pt-20 pb-8">
        {#each [...memberData].reverse() as member, _}
            <MemberCard
                pfp_url={member.pfp_url}
                position={member.position}
                tags={member.tags}
                names={member.names}
            />
        {/each}
    </section>
</main>