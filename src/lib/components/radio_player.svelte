<script lang="ts">

    import { Card } from 'flowbite-svelte'

    let radioUrl = "https://n08.radiojar.com/7mh06pa8uwzuv.mp3" // Sangeet Samvaad Radio
    let isPlaying = false

    let radio: HTMLAudioElement

    function togglePlay() {
        isPlaying ? radio.pause() : radio.play();
        isPlaying = !isPlaying;
    }

</script>

<main>
    <Card on:click={togglePlay} class="fixed bottom-0 right-0 z-10 m-2 bg-[#1d2230b9] rounded-lg backdrop-blur shadow shadow-black">
        <audio bind:this={radio} src={radioUrl} preload="metadata"></audio>
        <span class="text-lg text-gray-300 self-center" >{isPlaying ? "Pause" : "Play"}</span>
    </Card>
</main>