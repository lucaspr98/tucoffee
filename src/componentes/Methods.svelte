<script lang="ts">
    import { selectedMethod } from "../store";
    import type { Method } from "../utils/types";
    import MethodCard from "./MethodCard.svelte";

    let selected: Method | undefined = undefined;

    const unsubscribe = selectedMethod.subscribe((value) => {
		selected = value;
	});

    const handleSelect = (method: Method) => {
        selectedMethod.set(method);
    }

    export let methods: Method[];

</script>

<div class="container">
    <div class="methods">
        {#each methods as method (method.id)}
            <MethodCard {...method} selected={selected !== undefined && selected.id == method.id} onSelect={() => handleSelect(method)}/>
        {/each}
    </div>
</div>

<style>
    .container {
        display: inline-flex;
        height: 20%;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        background-color: rgba(219,193,172,0.9);
        padding: 16px;
        gap: 8px;
        overflow-x: auto; 
        border: solid rgb(236,224,209) 4px;
        border-radius: 5px;
    }
    .methods {
        display: flex; 
        gap: 32px;
        height: 100%;
    }
</style>
