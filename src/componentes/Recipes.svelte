<script lang="ts">
	import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
	import { selectedMethod } from "../store";
	import type { Method, Recipe } from "../utils/types";
	import RecipeCard from "./RecipeCard.svelte";

    let method: Method | undefined = undefined;

    const unsubscribe = selectedMethod.subscribe((value: Method | undefined) => {
		method = value;
	});

    const getRecipes = async (method?: Method) => {
        if(!method) return [];
        const db = getFirestore()
        const q = query(collection(db, "Recipe"), where("method", "==", method.id));
        const queryRecipes = await getDocs(q);
        const recipes: Recipe[] = [];
        queryRecipes.forEach(rec => recipes.push({
                id: rec.id,
                author: rec.get("author"),
                grind: rec.get("grind"),
                water: rec.get("water"),
                temperature: rec.get("temperature"),
                weight: rec.get("weight"),
                steps: rec.get("steps"),
                produce: rec.get("produce"),
                time: rec.get("time")
            }as Recipe))
        return recipes;
    }

    $: recipesPromise = getRecipes(method);
</script>

<div>
    {#if method}
        {#await recipesPromise}
            <p>buscando receitas</p>
        {:then recipes} 
            <h1>Receitas de {method?.name}</h1>
            {#if recipes.length > 0}
                {#each recipes as recipe (recipe.id)}
                <RecipeCard {...recipe}/>
                {/each}
            {:else}
                <span>sem receitas adicionadas</span>
            {/if}
        {/await}
    {:else}
    <section class="no-selected">
        <h1>Selecione um método acima</h1>
        <img src="/togo.svg" alt="loading">
    </section>
    {/if}   
</div>

<style>
    div {
        width: 90%;
        min-height: 60vh;
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