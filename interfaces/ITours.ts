export interface ITours {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    included: Included[];
}

interface Included {
    idIncluded: number;
    nameIncluded: string;
}