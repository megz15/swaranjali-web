<script lang="ts">
    import { Card } from "flowbite-svelte";

    let radioUrl = "https://n08.radiojar.com/7mh06pa8uwzuv.mp3"; // Sangeet Samvaad Radio
    let isPlaying = false;

    let radio: HTMLAudioElement;
    let title = "Sangeet Samvaad";
    let currentTime: string = "00:00";
    let duration: string = "00:00";

    function playPause() {
        isPlaying ? radio.pause() : radio.play();
        isPlaying = !isPlaying;
        // radio.controls = true;
    }

    function forward() {
        radio.currentTime += 5;
    }

    function backward() {
        radio.currentTime -= 10;
    }

    function updateMeta() {
        currentTime = new Date(radio.currentTime * 1000).toISOString().substring(14, 19);
        duration = isFinite(radio.duration) ? new Date(radio.duration * 1000).toISOString().substring(14, 19) : "-1:-1";
        // title = radio.currentSrc;
    }
</script>

<main>
    <Card
        class="fixed bottom-0 right-0 z-10 m-2 bg-[#1d2230b9] rounded-lg backdrop-blur shadow shadow-black"
    >
        <audio
            bind:this={radio}
            on:timeupdate={updateMeta}
            src={radioUrl}
            preload="metadata"
        ></audio>
        <!-- <div class="text-white font-semibold">Sangeet Samvaad Radio</div> -->
        <div class="text-white font-semibold">Title: {title}</div>
        <div class="text-gray-300 font-semibold">
            Duration: {currentTime}/{duration}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="text-3xl text-gray-300 self-center mt-4">
            <span on:click={backward}>⏮️</span>
            <span on:click={playPause}>{isPlaying ? "⏸️" : "▶️"}</span>
            <span on:click={forward}>⏩️</span>
        </div>
    </Card>
</main>
