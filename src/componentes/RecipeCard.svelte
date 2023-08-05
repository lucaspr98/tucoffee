
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
    export let author: string;
    export let reference: string;
</script>

<div class="container">
    <div class="header">
        <div class="time">
            <i class="fa fa-user-o" style="font-size:24px"></i>
            <p>Autor: <span>{author}</span><a href={reference} target="_blank">*</a></p>
        </div>            
        <div class="time">
            <i class="fa fa-clock-o" style="font-size:24px"></i>
            <p>Tempo de extração aproximado:</p>
            <span>{time}</span>
        </div>
    </div>
    <div class="info">
        <div class="info-card">
            <img src="coffee-bag.png" alt="quantity">
            <div class="info-card-details">
                <p>Quantidade:</p>
                <span>{weight}g</span>
            </div>
        </div>
        <div class="info-card">
            <img src="grinder.png" alt="grind">
            <div class="info-card-details">
                <p>Moagem:</p>
                <span>{grind}</span>
            </div>
        </div>
        <div class="info-card">
            <img src="kettle.png" alt="water">
            <div class="info-card-details">
                <p>Água:</p>
                <span>{water}g ({temperature}°C)</span>
            </div>
        </div>
        <div class="info-card">
            <img src="cup.png" alt="produces">
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
    </div>
</div>

<style>
    .container {
        background-color: rgb(236,224,209);
        padding: 16px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;
        border: solid rgb(160, 129, 92);
    }
    .info {
        display: grid;
        grid-auto-flow: column;
        gap: 16px;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 16px;
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
        border: solid rgb(206, 176, 139);
}
    .info-card-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
    .info img {
        object-fit: contain;
        max-height: 50px;
    }
    p {
        font-weight: bold;
        font-size: large;
        margin: 0px;
    }
    p > span {
        font-weight: normal;
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
    @media screen and (max-width: 800px) {
        .info {
            grid-auto-flow: row;
        }
        .info-card-details {
            flex-direction: row;
            align-items: center;
        }
        .header {
            flex-direction: column;
        }
    }
</style>