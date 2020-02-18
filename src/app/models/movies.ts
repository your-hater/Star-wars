export interface IMovie {
    id: number;
    name: string;
    info: string;
    img: string;
    releaseDate: string;
    director: string;
    money: IMoney;
}

export interface IMoney {
    budget: string;
    earned: string;
}
