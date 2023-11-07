export interface Proyects {
    id: number,
    name: String,
    image: {
        front: String,
        carrousel: Array<Array<String>>
    },
    description: String,
    link: String
}
