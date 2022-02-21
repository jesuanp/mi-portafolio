import imgVideogames from './images/videogames.png';
import imgCriptomonedas from './images/criptomonedas.jpg';
import imgWather from './images/wather.png';
import imgMiddleware from './images/middleware.png';
import mernTasks from './images/MERNtasks.png';

const proyectos = [
    {
        id: 1,
        title: "Middleware App",
        description: "Middleware app  Es una red social en donde los programadores juniors pueden encontrar su primera experiencia laboral y las empresas que necesiten a juniors pueden ingresar y hacer publicaciones de empleo. Esta web cuenta con chat en tiempo real, un mapa, notificaciones y una sección para hacer publicaciones. Mi participación en este proyecto fue en el back-end, en la base de datos y en el front-end con las notificaciones y las publicaciones.",
        tecnologias: "React, Redux, Bootstrap, Firebase, Socket.io, Node.js, Express, Mongoose y MongoDB",
        link: {
            url: "https://drive.google.com/file/d/12uwoyBknFx9rE4qcy1SIjdU1njgQWy9Q/view?usp=sharing",
            tipo: "Video del proyecto",
            urlDos: "https://middlewareapp-new.vercel.app",
            tipoDos: "Pagina web del proyecto"
        },
        img: imgMiddleware
    },
    {
        id: 2,
        title: "Videogames App",
        description: "En esta pagina web se puede ver una variedad de videojuegos o buscar un videojuego en específico (estos juegos los obtengo de una api rest de rawg), los mismo se pueden ordenar de forma ascendente o descendente según rating o de forma alfabética, también se pueden filtrar por genero, plataformas en las que corre el videojuego. Se puede también agregar un videojuego el cual se guarda en la base de datos. A este juego se le puede poner el nombre, el rating, la fecha, etc.",
        tecnologias: "React, Redux, NodeJS, Express, PostgreSQL, Sequelize.",
        link: {
            url: 'https://youtu.be/P1OC0ICplMg',
            tipo: 'Video del proyecto',
        },
        img: imgVideogames
    },
    {
        id: 3,
        title: 'MERN Tasks',
        description: 'MERNtasks es una página web en donde te puedes crear una cuenta y añadir proyectos que estés haciendo, también puedes agregar tareas a cada proyecto. Algunas de las funciones que tiene son: editar las tareas, marcar tareas como completadas o incompletas, eliminar una tareas.',
        tecnologias: 'React, React-Context, NodeJS, Express, MongoDB, Mongoose, jsonwebtoken', 
        link: {
            url: 'https://mern-tasks-jp.netlify.app/',
            tipo: 'Pagina web del proyecto'
        },
        img: mernTasks
    },
    {
        id: 4,
        title: "Criptomonedas",
        description: "Para este proyecto hice una web en donde muestra una tabla con las 100 criptomonedas más reconocidas. En la tabla esta el precio y el porcentaje (de cuanto subió o bajó el precio en 24h) de cada criptomoneda. Tiene un filtro para ordenar en ascendente o descendente por el precio, el porcentaje u ordenar de la A a la Z y viceversa. También puedes buscar una criptomoneda en específico.",
        tecnologias: "React, Redux",
        link: {
            url: 'https://criptomonedas-jesuanp.vercel.app',
            tipo: 'Pagina web del proyecto',
        },
        img: imgCriptomonedas
    },
    {
        id: 5,
        title: "Wather App",
        description: "En esta pagina puedes buscar una ciudad y ver el clima que hace actualmente, también tiene un historial donde se guardan todas la ciudades que buscas.",
        tecnologias: "React, Redux",
        link: {
            url: 'https://wather-app-jesuanp.vercel.app',
            tipo: 'Pagina web del proyecto',
        },
        img: imgWather
    },
]

export default proyectos;