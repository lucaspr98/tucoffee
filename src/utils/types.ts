export enum Grind {
    fine = "Fina",
    mediumFine = "Média fina",
    medium = "Média",
    mediumCoarse = "Média grossa",
    coarse = "Grossa",
}

export type Recipe = {
    id: string;
    grind: Grind;
    water: number;
    temperature: number;
    weight: number;
    steps: string[];
    produces: number;
    time: string;
}

export type Method = {
    id: string;
    name: string;
    image: string;
    unlocked: boolean;
    recipes: Recipe[]
}
