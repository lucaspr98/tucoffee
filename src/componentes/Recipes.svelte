<script lang="ts">
	import { selectedMethod } from "../store";
	import type { Method } from "../utils/types";
	import RecipeCard from "./RecipeCard.svelte";

    let method: Method | undefined = undefined;

    const unsubscribe = selectedMethod.subscribe((value: Method | undefined) => {
		method = value;
	});
</script>

<div>
    {#if method}
        <h1>Receitas de {method?.name}</h1>
        {#if method.recipes.length > 0}
            {#each  method.recipes as recipe (recipe.id)}
                <RecipeCard {...recipe}/>
            {/each}
        {:else}
            <span>sem receitas adicionadas</span>
        {/if}
    {:else}
        <section class="no-selected">
            <h1>Selecione um método acima</h1>
            <img src="togo.png" alt="loading">
        </section>
    {/if}   
</div>

<style>
    div {
        width: 90%;
        height: 60%;
        background-color: rgba(219,193,172,0.9);
        border-radius: 0px 0px 16px 16px;
        padding: 8px 16px;
        overflow-y: auto;
        border: solid rgb(236,224,209) 4px;
        border-radius: 5px;
    }
    h1 {
        margin-top: 8px;
        text-align: center;
    }
    .no-selected {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .no-selected img {
        height: 40%;
    }
</style>