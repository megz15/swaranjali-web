<script lang="ts">
    import { Card, Avatar, Badge } from "flowbite-svelte";

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
</script>

<main>
    <Card
        padding="sm"
        class="bg-[#12121fcc] rounded-lg backdrop-blur-sm border-0"
    >
        <div class="flex gap-6 justify-center">
            <div class="flex flex-col justify-evenly">
                <Avatar src={pfp_url} size="xl" />
                <div class="flex mt-4 space-x-2">
                    <a href="https://wa.me/{contact.phone}">
                        <img src="{waLogo}" alt="WA">
                    </a>

                    <a href="https://www.instagram.com/{contact.insta}">
                        <img src="{igLogo}" alt="IG">
                    </a>
    
                    <a href="mailto:{contact.email}">
                        <img src="{emLogo}" alt="EM">
                    </a>
    
                    <a href="https://www.github.com/{contact.github}">
                        <img src="{ghLogo}" alt="GH">
                    </a>
                </div>
            </div>

            <div>
                <h5 class="mb-1 text-2xl font-medium text-white">{name}</h5>
                <div class="text-lg text-yellow-400">{id}</div>
                <div class="text-xl text-yellow-400 font-semibold">{tags.pos}</div>

                <div class="mt-2 flex flex-wrap justify-between gap-y-1">
                    <Badge large color="yellow" class="text-lg w-[48.5%]">{tags.cat}</Badge>
                    <Badge large color="green" class="text-lg w-[48.5%]">{tags.bat}</Badge>
                    <Badge large color="yellow" class="text-lg w-full">{skill}</Badge>
                </div>
            </div>
        </div>

        <div class="text-gray-300 mt-8">{text}</div>

    </Card>
</main>
