<script lang="ts">
	import type { Recipe } from "../utils/types";

    export let id: string;
    export let name: string;
    export let image: string;
    export let unlocked: boolean;
    export let selected: boolean;
    export let onSelect: () => void;
    export let recipes: Recipe[];
</script>

<button class="method-button" class:selected={selected} on:click={onSelect} disabled={!unlocked} >
    <div class="button-content" >
        <img src={image} alt={`${name}_img`}>
        <span>{name}</span>
    </div>
    <div class="locker" class:unlocked={unlocked}>
        <i class="fa fa-lock" style="font-size:2.5vh"></i>
    </div>
</button>

<style>
    .method-button {
        position: relative;
        aspect-ratio: 1 / 1;
        background: rgb(236,224,209);
        border-radius: 25px;
        padding: 8px;
        border: solid rgb(160, 129, 92);
    }
    .method-button:hover {
        background: rgb(128, 97, 76);
        border-color: rgb(55, 33, 17);
        cursor: pointer;
    }
    .button-content {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        user-select: none; 
    }
    .button-content img {
        object-fit: contain;
        height: 70%;
    }
    .button-content span {
        font-weight: bold;
        font-size: 2.2vh;
   }
   .selected {
        background: rgb(185, 142, 111);
        border-color: rgb(55, 33, 17);
   }
   .method-button:hover:disabled {
        background-color: rgb(236,224,209);
        border-color: rgb(160, 149, 136);
        pointer-events: none;
    }   
   .unlocked {
        opacity: 0;
    }
   .locker {
        position: absolute;
        left: 0;
        top: 0;
        padding: 8px;
        z-index: 2;
   }
   button:disabled {
        border-color: rgb(160, 149, 136);
   }
   button:disabled img {
        opacity: 50%;
   }
</style>