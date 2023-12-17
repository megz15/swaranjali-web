<script lang="ts">
    import { Card, Badge } from "flowbite-svelte";

    import waLogo from "$lib/assets/social/whatsapp.png";
    import ghLogo from "$lib/assets/social/github.png";
    import igLogo from "$lib/assets/social/insta.png";
    import emLogo from "$lib/assets/social/mail.png";

    export let name: string;
    export let id: string;
    export let pfp_url: string;
    export let skill: string;
    export let contact: {
        email: string;
        phone: string;
        github: string;
        insta: string;
    };
    export let tags: {
        cat: string;
        bat: string;
        pos: string;
    };
    export let text: string;

    // const [fName, ...rName] = name.split(' ');
</script>

<main>
    <Card
        class="bg-[#12121fcc] rounded-lg backdrop-blur-sm border-0 h-full w-screen"
    >
        <div class="flex gap-5 items-center">
            <!-- <div class="min-w-max"> -->
            <img src={pfp_url} alt={name} width="120px" class="rounded-full" />
            <!-- </div> -->

            <div class="flex flex-col justify-center">
                <h5 class="mb-1 text-2xl font-medium text-white">
                    <!-- {fName}<br>{rName.join(' ')} -->
                    {name}
                </h5>
                <div class="text-lg text-yellow-400">{id}</div>
                <div class="text-xl text-yellow-400 font-semibold">{tags.pos}</div>
            </div>
        </div>

        <div class="flex flex-wrap mt-4 justify-between">
            <div class="flex gap-1">
                <!-- <Badge large color="yellow" class="text-lg px-2">{tags.cat}</Badge> -->
                <!-- <Badge large color="green" class="text-lg px-2">{tags.bat}</Badge> -->
                {#each skill.split(",") as s}
                    <Badge large color="yellow" class="text-lg h-8">{s}</Badge>
                {/each}
            </div>

            <div class="flex gap-1">
                {#if contact.phone.length != 0}
                    <a href="tel:{contact.phone}">
                        <img src="{waLogo}" alt="WA" class="h-8">
                    </a>
                {/if}
                {#if contact.email.length != 0}
                    <a href="mailto:{contact.email}">
                        <img src="{emLogo}" alt="EM" class="h-8">
                    </a>
                {/if}
                {#if contact.github.length != 0}
                    <a href="https://www.github.com/{contact.github}">
                        <img src="{ghLogo}" alt="GH" class="h-8">
                    </a>
                {/if}
                {#if contact.insta.length != 0}
                    <a href="https://www.instagram.com/{contact.insta}">
                        <img src="{igLogo}" alt="IG" class="h-8">
                    </a>
                {/if}
            </div>
        </div>

        {#if text.length != 0}
            <div class="text-gray-300 mt-8">{text}</div>
        {/if}

    </Card>
</main>
