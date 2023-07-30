
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
            <img src="bean.svg" alt="quantity">
            <div class="info-card-details">
                <p>Quantidade:</p>
                <span>{weight}g</span>
            </div>
        </div>
        <div class="info-card">
            <img src="grinder.svg" alt="grind">
            <div class="info-card-details">
                <p>Moagem:</p>
                <span>{grind}</span>
            </div>
        </div>
        <div class="info-card">
            <img src="water.svg" alt="water">
            <div class="info-card-details">
                <p>Água:</p>
                <span>{water}g ({temperature}°C)</span>
            </div>
        </div>
        <div class="info-card">
            <img src="cup.svg" alt="produces">
            <div class="info-card-details">
                <p>Rendimento:</p>
                <span>{produces}ml</span>
            </div>
        </div>
    </div>
    <div class="steps">
        <p>Passos:</p>
        <ol>
            {#each steps as step}
            <li>{step}</li>
            {/each}
        </ol>
        <div class="time">
            <i class="fa fa-clock-o" style="font-size:24px"></i>
            <p>Tempo de extração aproximado:</p>
            <span>{time}</span>
        </div>
    </div>
</div>

<style>
    .info {
        display: flex;
        gap: 16px;
    }
    .info-card-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

    }

    .info-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgb(250, 235, 215);
        border-radius: 15px;
        gap: 8px;
        padding: 8px;
        width: 100%;
    }
    .info img {
        object-fit: contain;
        max-height: 75px;
        margin-bottom: -15px;
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
    ol {
        margin-top: 4px;
    }
    li {
        font-size: large;
    }
    .time {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px
    }
    @media screen and (max-width: 720px) {
        .info {
            flex-direction: column;
            width: 100%;
        }
        .info-card-details {
            flex-direction: row;
        }
    }
</style>