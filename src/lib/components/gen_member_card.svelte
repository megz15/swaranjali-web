<script lang="ts">
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
    <div
        class="block max-w-sm p-6 bg-[#12121fcc] rounded-lg backdrop-blur-sm border-0 h-full w-screen"
    >
        <div class="flex gap-5 items-center">
            <!-- <div class="min-w-max"> -->
            <img src={pfp_url?pfp_url:"https://i.imgur.com/0Ak7isp.png"} alt={name} width="120px" class="rounded-full" />
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

                {#if skill.split(",").length == 1}
                    <div class="bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded text-lg h-8">{tags.bat}</div>
                {/if}

                {#each skill.split(",") as s}
                    <div class="bg-yellow-100 text-yellow-800 font-medium px-2.5 py-0.5 rounded text-lg h-8">{s}</div>
                {/each}
            </div>

            <div class="flex gap-1">
                {#if contact.phone.length != 0}
                    <a href="https://wa.me/91{contact.phone}">
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

    </div>
</main>
