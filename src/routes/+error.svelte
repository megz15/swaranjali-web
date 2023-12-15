<script lang="ts">
    import { page } from '$app/stores';


    function getError(status: number) {
        return `Bro Loss [${status}]`;
    }
</script>

<div class="h-[calc(100vh-4rem)] flex items-center justify-center">
    <h1 class="text-4xl text-white bg-[#1d2230b9] backdrop-blur rounded-3xl p-5">{getError($page.status)}</h1>
</div>