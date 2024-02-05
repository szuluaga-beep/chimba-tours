import { ITours } from "@/interfaces/ITours";
import { IUser } from "@/interfaces/IUsers";

export const dataTours: ITours[] = [
    {
        id: 1,
        name: "Graffi Tour",
        price: 70000,
        image: "img1.jpg",
        description: "Un lugar que renace de un pasado lleno de muerte y violencia, Hoy en día es uno de los barrios más visitados y turísticos de Medellín, gracias a esa gran historia de transformación de sus residentes. Porque hoy en día solo vas a conocer arte, cultura, gente con ganas de salir adelante en la vida SIMPLEMENTE TRANSFORMACIÓN",
        included: [

            {
                idIncluded: 1,
                nameIncluded: "Hidratación"
            },
            {
                idIncluded: 3,
                nameIncluded: "Historia de transformación de la Comuna 13"
            },
            {
                idIncluded: 4,
                nameIncluded: "Show de baile"

            },
            {
                idIncluded: 5,
                nameIncluded: "Visita a galerias de arte, museo y miradores"
            },
            {
                idIncluded: 2,
                nameIncluded: "Crema (helado) de frutas"
            },
            {
                idIncluded: 6,
                nameIncluded: "Shows de freestyle"
            },

        ]
    },
    {
        id: 2,
        name: "city tour",
        price: 150000,
        image: "img4.jpg",
        description: "Ven y conoce la ciudad de la eterna primavera, hoy en día es un lugar favorito para los turistas por su sin igual hermosura, resiliencia, cultura y amabilidad de sus habitantes, y sus ganas de superación de quien vive aquí.",
        included: [

            {
                idIncluded: 1,
                nameIncluded: "Hidratación"
            },
            {
                idIncluded: 2,
                nameIncluded: "Visita a la Plaza Botero"
            },
            {
                idIncluded: 3,
                nameIncluded: "Visita al Palacio Nacional"

            },
            {
                idIncluded: 4,
                nameIncluded: "Visita al parque de las luces"
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