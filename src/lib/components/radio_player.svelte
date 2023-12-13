<script lang="ts">
    import { Card } from "flowbite-svelte";

    let radioUrl = "https://n08.radiojar.com/7mh06pa8uwzuv.mp3"; // Sangeet Samvaad Radio
    let isPlaying = false;

    let radioElement: HTMLAudioElement;
    let titleElement: HTMLDivElement;
    let durationElement: HTMLDivElement;
    let backControl: HTMLSpanElement;
    let frwdControl: HTMLSpanElement;

    let title: string = "Sangeet Samvaad";
    let currentTime: string = "00:00";
    let duration: string = "00:00";

    function togglePlayer() {
        // radioElement.controls = !radioElement.controls;
        titleElement.toggleAttribute("hidden");
        durationElement.toggleAttribute("hidden");
        backControl.toggleAttribute("hidden");
        frwdControl.toggleAttribute("hidden");
    }

    function playPause() {
        isPlaying ? radioElement.pause() : radioElement.play();
        isPlaying = !isPlaying;
        // radioElement.controls = true;
    }

    function forward() {
        radioElement.currentTime += 5;
    }

    function backward() {
        radioElement.currentTime -= 10;
    }

    function updateMeta() {
        currentTime = new Date(radioElement.currentTime * 1000).toISOString().substring(14, 19);
        duration = isFinite(radioElement.duration) ? new Date(radioElement.duration * 1000).toISOString().substring(14, 19) : "-1:-1";
        // titleElement = JSON.stringify(radioElement.audioTracks[0]);
    }
</script>

<main>
    <Card
        class="fixed right-0 z-50 m-2 bg-[#1d2230b9] rounded-lg backdrop-blur shadow shadow-black md:bottom-0"
    >
        <audio
            bind:this={radioElement}
            on:timeupdate={updateMeta}
            src={radioUrl}
            preload="metadata"
        ></audio>
        <!-- <div class="text-white font-semibold">Sangeet Samvaad Radio</div> -->
        <div bind:this={titleElement} class="text-white font-semibold">Title: {title}</div>
        <div bind:this={durationElement} class="text-gray-300 font-semibold mb-4">
            Duration: {currentTime}/{duration}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="text-3xl text-gray-300 self-center">
            <span bind:this={backControl} on:click={backward}>⏮️</span>
            <span on:click={playPause}>{isPlaying ? "⏸️" : "▶️"}</span>
            <span bind:this={frwdControl} on:click={forward}>⏩️</span>
            <span on:click={togglePlayer}>➖</span>
        </div>
    </Card>
</main>
