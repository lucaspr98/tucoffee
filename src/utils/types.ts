export enum Grind {
    fine = "Fina",
    mediumFine = "Média fina",
    medium = "Média",
    mediumCoarse = "Média grossa",
    coarse = "Grossa",
}

export type Recipe = {
    id: string;
    author: string;
    grind: Grind;
    water: number;
    temperature: number;
    weight: number;
    steps: string[];
    produce: number;
    time: string;
}

export type Method = {
    id: string;
    name: string;
    image: string;
    unlocked: boolean;
}
