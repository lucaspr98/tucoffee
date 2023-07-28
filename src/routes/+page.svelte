<script lang="ts">
    import { initializeApp } from "firebase/app";
    import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
    import Methods from "../componentes/Methods.svelte";
    import Recipes from "../componentes/Recipes.svelte";
    import type { Method } from "../utils/types";

    import { onMount } from 'svelte';

    let firebaseInitialized = false
    
    const initFirebase = async () => {
        const firebaseConfig = {
            apiKey: "AIzaSyBfcEUIJdvoZweWzis08NUYjb7qHJdyKQM",
            authDomain: "tucoffee-a3510.firebaseapp.com",
            projectId: "tucoffee-a3510",
            storageBucket: "tucoffee-a3510.appspot.com",
            messagingSenderId: "364357619825",
            appId: "1:364357619825:web:6a344fda41809886f2cbd0"
        };

        initializeApp(firebaseConfig);

        firebaseInitialized = true
    }
    
    onMount(initFirebase);
    
    const getMethods = async (initialized: boolean): Promise<Method[]> => {
        if(!initialized) return [];
        
        const db = getFirestore()
        const q = query(collection(db, "Method"), orderBy("unlocked", "desc"))
        const queryMethods = await getDocs(q);
        const methods: Method[] = [];
        queryMethods.forEach(async (doc) => {
            methods.push({
            id: doc.id,
            name: doc.get('name'),
            image:  doc.get('image'),
            unlocked:  doc.get('unlocked'),
            recipes: []
        } as Method)})
        return methods;
    }

    $: methodsPromise = getMethods(firebaseInitialized);    
</script>

<div>
    {#await methodsPromise}
        <div class="loading">
            <h2>Buscando receitas...</h2>
            <img src="/togo.svg" alt="loading">
        </div>
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
    .loading {
        height: 25vh;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: rgb(236,224,209, 0.9);
        justify-content: center;
        align-self: center;
        padding: 128px
    }
    .loading img {
        animation: fade 1.5s alternate infinite ease-in;
    }
    @keyframes fade {
        0%,100% { opacity: 0}
        50% { opacity: 1 }
    }
</style>