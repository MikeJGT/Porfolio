import { Proyects } from "../interfaces/proyects";
export const proyectsInfo: Array<Proyects> = [
    {
        id: 1,
        name: 'Leaflet Map',
        image: {
            front: '../../assets/mapLeaflet.png',
            carrousel: [
                ['../../assets/mapLeaflet.png', '../../assets/leafletMap_Bici.png', '../../assets/mapLeaflet.png'],
                ['../../assets/leafletMap600_1.png', '../../assets/leafletMap600_2.png', '../../assets/leafletMap600_3.png']
            ]
        },
        description: `The purpose of this project is the use of leaflet, a free software library that allows the implementation of maps with a wide variety of options such as the addition of layers with different information, geolocation...
        <br> <br>
        With Leaflet Map you can search for destinations anywhere in the world, calculate routes, check if there are bike paths available and discover the most relevant hiking trails in the area.
        <br> <br>
        You can interact with this project at the following link.
        <br> <br>`,
        link: 'https://github.com/MikeJGT/leafletMap'
    },
    {
        id: 2,
        name: 'Video Downloader',
        image: {
            front: '../../assets/ytbDownloader2.png',
            carrousel: [
                ['../../assets/ytbDownloader2.png', '../../assets/ytbDownloader_Download.png', '../../assets/ytbDownloader_Search.png'],
                ['../../assets/ytbDownloader600_1.png', '../../assets/ytbDownloader600_2.png', '../../assets/ytbDownloader600_3.png']
            ]
        },
        description: `Have you ever wanted to download a video from youtube and didn't know how?
        Don't worry Video Downlader is here to help you.
        <br> <br>
        Through this application you can search for your favorite videos by title or URL. Once you find them just select the quality of the video you want to download. You also have the option to download the audio only.
        <br> <br>
        All the downloads you make will be through my own Streaming API so you won't have to wait long until the download is finished.
        <br> <br>
        Now you can enjoy your videos wherever and whenever you want.
        <br> <br>
        You can interact with this project at the following link.
        <br> <br>`,
        link: 'https://bespoke-lily-50edc2.netlify.app/'
    },
    {
        id: 3,
        name: 'Michael Bot',
        image: {
            front: '../../assets/telegramBot.png',
            carrousel: [
                [
                    '../../assets/telegramBot.png',
                    '../../assets/bot_telegram.png',
                    '../../assets/telegramBot.png',
                ],
                [
                    '../../assets/telegramBot600_1.png',
                    '../../assets/bot_telegram600.jpg',
                    '../../assets/telegramBot600_1.png'
                ]
            ]
        },
        description: `This bot allows you to solve all the doubts you have about my profile in a dynamic and interactive way. Programmed with several options that can help you in the research of my profile. It has been created with libraries like telegraf and openai.
        <br> <br>
        You can interact with this project at the following link.
        <br> <br>`,
        link: 'https://github.com/MikeJGT/MikeBot'
    },
    {
        id: 4,
        name: 'Things To Do',
        image: {
            front: '../../assets/greenDom.png',
            carrousel: [
                [
                    '../../assets/greenDom.png',
                    '../../assets/greenDom.png',
                    '../../assets/greenDom.png'
                ],
                [
                    '../../assets/greenDom600.png',
                    '../../assets/greenDom600.png',
                    '../../assets/greenDom600.png'
                ]
            ]
        },
        description: `It is a fast, simple and appealing task manager that implements some of the functionalities of the Kanban methodology.
        <br> <br>
        Through this application you will be able to prioritize and manage the different stages of your projects, individually.
        <br> <br>
        You can interact with this project at the following link.
        <br> <br>`,
        link: 'https://github.com/MikeJGT/AplicacionTareas'
    },
    {
        id: 5,
        name: 'Class Mate',
        image: {
            front: '../../assets/classMate_Home.png',
            carrousel: [
                [
                    '../../assets/classMate_Home.png',
                    '../../assets/classMate_SQL.png',
                    '../../assets/classMate_Profesora.png'
                ],
                [
                    '../../assets/classMate600_1.png',
                    '../../assets/classMate600_2.png',
                    '../../assets/classMate600_3.png'
                ]
            ]
        },
        description: `ClassMate is a project focused on the creation of a school platform.
        <br> <br>
        In this application, parents, teachers and students can access a virtual environment that offers different services such as messages, user registration with different roles, management of schedules, subjects, homework and grades. 
        <br> <br>
        The information generated in this platform is stored in a MySQL database through a REST API generated with express.
        <br> <br>
        You can see this project in the following link.
        <br> <br>`,
        link: 'https://github.com/MikeJGT/ClassMate_front_final'
    },
    {
        id: 6,
        name: 'Best Hamburger',
        image: {
            front: '../../assets/burguer_2.png',
            carrousel: [
                [
                    '../../assets/burguer_2.png',
                    '../../assets/burger_Blog.png',
                    '../../assets/burger_Menu.png'
                ],
                [
                    '../../assets/burger600_1.png',
                    '../../assets/burger600_2.png',
                    '../../assets/burger600_3.png'
                ]
            ]
        },
        description: `This template has a great design perfect for promoting bars and restaurants.
        <br> <br>
        Here you can expose all the services you offer and tell us about yourself and your business in the About section.
        <br> <br>
        In the Blog section you can tell a little more about the history of your store, experiences or some of your best anecdotes.
        <br> <br>
        It also has other sections where you can display your products and give your customers the option to place orders online.
        <br> <br>
        You can obtain this template at the following link.
        <br> <br>`,
        link: 'https://github.com/MikeJGT/hamburgueseria-mike'
    }, {
        id: 7,
        name: 'Porfolio',
        image: {
            front: '../../assets/porfolio.png',
            carrousel: [
                [
                    '../../assets/porfolio.png',
                    '../../assets/porfolio_2.png',
                    '../../assets/porfolio_3.png'
                ],
                [
                    '../../assets/porfolio600_1.png',
                    '../../assets/porfolio600_2.png',
                    '../../assets/porfolio600_3.png'
                ]
            ]
        },
        description: `This project has been done with Angular, TypeScript and Sass technologies for the frontend. In the backend I have implemented a REST API with ExpressJS and NodeJS.
        <br><br>
        Here you can discover some of my most relevant projects.
        <br><br>  
        In the last section you will find a mail service so that you can contact me directly.
        <br><br>
        You can see the code of this project in the following link.
        <br><br>`,
        link: 'https://github.com/MikeJGT/Porfolio'
    }
]