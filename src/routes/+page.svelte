<script lang="ts">
    import Methods from '../componentes/Methods.svelte';
    import Recipes from '../componentes/Recipes.svelte';
    import type { Method, Recipe } from '../utils/types.js';

    export let data;

    $: methods = data.methods.map((method :any) => ({
                id: method._id,
                name: method.name,
                image:  method.image_url,
                unlocked:  method.unlocked,
                recipes: method.recipes.map((rec: any) => ({
                    id: rec._id,
                    grind: rec.grind,
                    water: rec.water,
                    temperature: rec.temperature,
                    weight: rec.weight,
                    steps: rec.steps,
                    produces: rec.produces,
                    time: rec.time,
                    author: rec.author,
                    reference: rec.reference
                }) as Recipe)
            } as Method))
</script>

<div>
    <Methods methods={methods}/>
    <Recipes />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        align-items: center;
        max-width: 100vw;
        height: calc(100vh - 64px);
    }
    h1 {
        color: rgb(236,224,209, 0.9);
        animation: fade 1.5s alternate infinite ease-in;
    }
    @keyframes fade {
        0%,100% { opacity: 0}
        50% { opacity: 1 }
    }
</style>