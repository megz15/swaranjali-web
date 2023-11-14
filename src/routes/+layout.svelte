<script lang="ts">
    import "../app.postcss";
    import { Navbar, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar let:NavContainer class="m-0 p-0">
    <NavContainer class="bg-[#1d2230b9] rounded-lg fixed z-10 top-2 justify-around backdrop-blur">
    <NavHamburger />
    <NavUl>
        <NavLi class="text-black sm:text-white" href="/">Home</NavLi>
        <NavLi class="text-black sm:text-white" href="/members">Members</NavLi>
        <NavLi class="text-black sm:text-white" href="/naadgen">NaadGen</NavLi>
        <NavLi class="text-black sm:text-white" href="/drive">Drive</NavLi>
        <NavLi class="text-black sm:text-white" href="/social">Social</NavLi>
        <NavLi class="text-black sm:text-white" href="/recordings">Recordings</NavLi>
    </NavUl>
    </NavContainer>
</Navbar>

<slot />