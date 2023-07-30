
<script lang="ts">
	import type { Grind } from "../utils/types";

    export let id: string;
    export let grind: Grind;
    export let water: number;
    export let temperature: number;
    export let weight: number;
    export let steps: string[];
    export let produces: number;
    export let time: string;
</script>

<div class="container">
    <div class="info">
        <div class="info-card">
            <p>Quantidade</p>
            <img src="bean.svg" alt="quantity">
            <span>{weight}g</span>
        </div>
        <div class="info-card">
            <p>Moagem</p>
            <img src="grinder.svg" alt="grind">
            <span>{grind}</span>
        </div>
        <div class="info-card">
            <p>Água</p>
            <img src="water.svg" alt="water">
            <span>{water}g ({temperature}°C)</span>
        </div>
        <div class="info-card">
            <p>Rendimento</p>
            <img src="cup.svg" alt="produces">
            <span>{produces}ml</span>
        </div>
        <div class="info-card">
            <p>Tempo de extração</p>
            <i class="fa fa-clock-o clock-icon"></i>
            <span>{time}</span>
        </div>
    </div>
    <div class="steps">
        <p>Passos:</p>
        <ol>
            {#each steps as step}
            <li>{step}</li>
            {/each}
        </ol>
    </div>
</div>

<style>
    .info {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        gap: 16px;
    }
    @media screen and (max-width: 720px) {
        .info {
            flex-direction: column;
        }
    }
    .info-card {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgb(250, 235, 215);
        border-radius: 25px;
        padding: 16px;
    }
    .info img {
        object-fit: contain;
        max-height: 150px;
    }
    .info span {
        font-weight: bold;
        font-size: medium;
        margin-top: -24px;
        text-align: center;
    }
    p {
        font-weight: bold;
        font-size: large;
        margin: 0px;
    }
    .info p {
        text-align: center;
    }
    .container {
        background-color: rgb(236,224,209);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;
    }
    .steps { 
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .clock-icon {
        text-align: center;
        font-size: 64px;
    }
</style>