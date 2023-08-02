<script lang="ts">
    import Methods from "../componentes/Methods.svelte";
    import Recipes from "../componentes/Recipes.svelte";
    import type { Method, Recipe } from "../utils/types";
    
    const getMethods = async (): Promise<Method[]> => {
        try {
            const response = await fetch("https://tucoffee-7581.restdb.io/rest/method?q={}&h={\"$orderby\": {\"unlocked\":-1, \"name\": 1}}", {
                method: 'GET',
                headers: {
                    'x-apikey': '64c5c96a86d8c563ebed92b0'
                } 
            });
            const methods: Method[] = [];
            await response.json().then(r => r.forEach((method: any) => 
                methods.push({
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
                } as Method
            )))

            return methods;
        } catch (e) {
            console.error(e)
        }
        return [];
    }

    $: methodsPromise = getMethods();    
</script>

<div>
    {#await methodsPromise}
        <h1>Buscando receitas...</h1>
    {:then methods}
        <Methods methods={methods}/>
        <Recipes />
    {:catch message}
        <p>{message}</p>
    {/await}
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