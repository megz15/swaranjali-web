<script lang="ts">
    const stationId = "7mh06pa8uwzuv"
    const radioUrl = `https://n08.radiojar.com/${stationId}.mp3`
    const metaUrl = `https://proxy.radiojar.com/api/stations/${stationId}/now_playing/`

    let isPlaying = false
    const corsToken = process.env.CORS_TOKEN

    let radioElement: HTMLAudioElement
    let cardDivElement: HTMLDivElement
    let thumbElement: HTMLImageElement
    let titleElement: HTMLDivElement
    let artistElement: HTMLDivElement
    let extraElement: HTMLDivElement
    let durationElement: HTMLDivElement
    let backControl: HTMLSpanElement
    let frwdControl: HTMLSpanElement
    let toggleControl: HTMLSpanElement

    let thumb: string = "https://www.sangeetsamvaad.com/images/favicon.png"
    let title: string = "Sangeet Samvaad"
    let artist: string = "Meghraj"
    let extra: string = ""
    let currentTime: string = "00:00"
    let duration: string = "00:00"

    function togglePlayer() {
        thumbElement.toggleAttribute("hidden")
        titleElement.toggleAttribute("hidden")
        artistElement.toggleAttribute("hidden")
        extraElement.toggleAttribute("hidden")
        durationElement.toggleAttribute("hidden")
        backControl.toggleAttribute("hidden")
        frwdControl.toggleAttribute("hidden")
        cardDivElement.classList.toggle("gap-5")
        toggleControl.textContent = toggleControl.textContent == "➖" ? "➕" : "➖"
    }

    function playPause() {

        // Get stream metadata
        fetch(`https://proxy.cors.sh/${metaUrl}`, {
            headers: {
                'x-cors-api-key': corsToken,
            }
        }).then(res => res.json()).then(data => {
            thumb = data["thumb"]
            title = data["artist"]
            artist = data["title"]
            extra = data["album"]
        }).catch(e => console.log(e ))

        isPlaying ? radioElement.pause() : radioElement.play()
        isPlaying = !isPlaying
    }

    function forward() {
        radioElement.currentTime += 5
    }

    function backward() {
        radioElement.currentTime -= 10
    }

    function updateMeta() {
        currentTime = new Date(radioElement.currentTime * 1000).toISOString().substring(14, 19)
        duration = isFinite(radioElement.duration) ? new Date(radioElement.duration * 1000).toISOString().substring(14, 19) : "-1:-1"
    }
</script>

<main>
    <audio
        bind:this={radioElement}
        on:timeupdate={updateMeta}
        src={radioUrl}
        preload="metadata"
    />
    <div
        class="flex flex-col gap-5 items-center p-5 fixed right-0 z-50 m-2 bg-[#1d2230b9] rounded-lg backdrop-blur shadow shadow-black md:bottom-0 border-2 border-gray-400"
        bind:this={cardDivElement}
    >
        <div class="flex gap-5 items-center">
            <img bind:this={thumbElement} src="{thumb}" width="100px" class="rounded-lg border-2 border-gray-400" />

            <div class="flex flex-col justify-center">
                <div bind:this={titleElement} class="text-white font-semibold">{title}</div>
                <div bind:this={artistElement} class="text-white font-semibold">~ {artist}</div>
                <div bind:this={extraElement} class="text-gray-300 font-semibold max-w-[180px] break-normal">
                    {#if extra}
                        {extra}
                    {:else}
                        <br>
                    {/if}
                </div>
                <div bind:this={durationElement} class="text-gray-300 font-semibold">
                    {currentTime}/{duration}
                </div>
            </div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="text-3xl text-gray-300">
            <span bind:this={backControl} on:click={backward}>⏮️</span>
            <span on:click={playPause}>{isPlaying ? "⏸️" : "▶️"}</span>
            <span bind:this={frwdControl} on:click={forward}>⏩️</span>
            <span bind:this={toggleControl} on:click={togglePlayer}>➖</span>
        </div>
    </div>
</main>
