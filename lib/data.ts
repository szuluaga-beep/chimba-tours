import { ITours } from "@/interfaces/ITours";
import { IUser } from "@/interfaces/IUsers";

export const dataTours: ITours[] = [
    {
        id: 1,
        name: "Graffi Tour",
        price: 100,
        image: "img1.jpg",
        description: "Voluptate irure ea sunt veniam officia sunt. Magna anim fugiat labore cillum irure amet esse incididunt. Nostrud deserunt commodo consectetur est eu consectetur proident esse enim velit ex eu. Sit tempor irure aliquip irure esse ea exercitation deserunt sunt magna tempor ut ex. Cupidatat velit non cillum labore.",
        included: [

            {
                idIncluded: 1,
                nameIncluded: "Hidratación"
            },
            {
                idIncluded: 2,
                nameIncluded: "Historia de transformación de la Comuna 13"
            },
            {
                idIncluded: 3,
                nameIncluded: "Show de baile"

            },
            {
                idIncluded: 4,
                nameIncluded: "Visita a galerias de arte, museo y miradores"
            },
            {
                idIncluded: 5,
                nameIncluded: "Crema (helado) de frutas"
            },

        ]
    },
    {
        id: 2,
        name: "Graffi Tour",
        price: 100,
        image: "img1.jpg",
        description: "Voluptate irure ea sunt veniam officia sunt. Magna anim fugiat labore cillum irure amet esse incididunt. Nostrud deserunt commodo consectetur est eu consectetur proident esse enim velit ex eu. Sit tempor irure aliquip irure esse ea exercitation deserunt sunt magna tempor ut ex. Cupidatat velit non cillum labore.",
        included: [

            {
                idIncluded: 1,
                nameIncluded: "Hidratación"
            },
            {
                idIncluded: 2,
                nameIncluded: "Historia de transformación de la Comuna 13"
            },
            {
                idIncluded: 3,
                nameIncluded: "Show de baile"

            },
            {
                idIncluded: 4,
                nameIncluded: "Visita a galerias de arte, museo y miradores"
            },
            {
                idIncluded: 5,
                nameIncluded: "Crema (helado) de frutas"
            },

        ]
    },
]

export const users: IUser[] = [
    {
        id: 1,
        avatar: "Santiago.png",
        name: "Santiago Perez",
        country:"United States",
        testimonial: "Proident dolor laboris magna Lorem do do nostrud do non cupidatat eu cillum cillum incididunt. Cillum et laboris cillum ad anim mollit eu fugiat. Ipsum dolore cupidatat cupidatat ea exercitation nostrud aute irure mollit dolor id. "
    },
    {
        id: 2,
        avatar: "Maria.png",
        name: "Maria Costa",
        country:"Perú",
        testimonial: "Proident dolor laboris magna Lorem do do nostrud do non cupidatat eu cillum cillum incididunt. Cillum et laboris cillum ad anim mollit eu fugiat. Ipsum dolore cupidatat cupidatat ea exercitation nostrud aute irure mollit dolor id. "
    },
    {
        id: 3,
        avatar: "Vanesa.png",
        name: "Vanesa Upegui",
        country:"Colombia",
        testimonial: "Proident dolor laboris magna Lorem do do nostrud do non cupidatat eu cillum cillum incididunt. Cillum et laboris cillum ad anim mollit eu fugiat. Ipsum dolore cupidatat cupidatat ea exercitation nostrud aute irure mollit dolor id. "
    },
]