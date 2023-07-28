<script lang="ts">
    export let name: string;
    export let image: string;
    export let unlocked: boolean;
    export let selected: boolean;
    export let onSelect: () => void;
</script>


<button class="method-button" class:selected={selected} on:click={onSelect} disabled={!unlocked}>
    <div class="button-content" >
        <img src={image} alt={`${name}_img`}>
        <span>{name}</span>
    </div>
    <div class="locker" class:unlocked={unlocked}>
        <i class="fa fa-lock" style="font-size:24px"></i>
    </div>
</button>

<style>
    .method-button {
        position: relative;
        aspect-ratio: 1 / 1;
        background: rgb(236,224,209);
        border-radius: 25px;
        padding: 16px;
        border: solid rgb(160, 129, 92);
    }
    .button-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .button-content img {
        object-fit: contain;
    }
    .button-content span {
        font-weight: bold;
        font-size: large;
        margin-top: -32px;
   }
   .selected {
        background: rgb(150,114,89);
        border-color: rgb(55, 33, 17);
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