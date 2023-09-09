//objeto que contiene los datos de cada curso
const cursos = [
    {
        id:1,
        webp: "./imagen/basico_platzi.webp",
        imagen: "./imagen/basico_platzi.png",
        titulo: "Python",
        descripcion: "Curso Basico De Python",
        url: "https://platzi.com/p/VeraBalcazar23/curso/1937-python-basico/diploma/detalle/"
    },
    {
        id:2,
        webp: "./imagen/fundamentos_python.webp",
        imagen: "./imagen/fundamentos_python.png",
        titulo: "Fundamentos de Python",
        descripcion: "Curso Fundamentos De Python",
        url: "https://platzi.com/p/VeraBalcazar23/curso/4227-python/diploma/detalle/"
    },
    {
        id:3,
        webp: "./imagen/poo.webp",
        imagen: "./imagen/poo.png",
        titulo: "POO",
        descripcion: "Curso de Programacion Orientada a Objetos",
        url: "https://platzi.com/p/VeraBalcazar23/curso/1474-oop/diploma/detalle/"
    },
    {
        id:4,
        webp: "./imagen/git.webp",
        imagen: "./imagen/git.png",
        titulo: "Git & Git-Hub",
        descripcion: "Curso de Git & Git-Hub",
        url: "https://platzi.com/p/VeraBalcazar23/curso/1557-git-github/diploma/detalle/"
    },
    {
        id:5,
        webp: "./imagen/terminal.webp",
        imagen: "./imagen/terminal.png",
        titulo: "Terminal",
        descripcion: "Curso de Terminal",
        url: "https://platzi.com/p/VeraBalcazar23/curso/2292-terminal/diploma/detalle/"
    },
    {
        id:6,
        webp: "./imagen/desarollo_web.webp",
        imagen: "./imagen/desarollo_web.png",
        titulo: "Desarrollo Web",
        descripcion: "Curso de Desarrollo web completo",
        url: "#"
    }

];


const listaCursos = document.querySelector('#cursos')

function mostrarCurso() {
    for (let i = 0; i <= cursos.length; i++) {

        const article = document.createElement('article');
        article.classList.add("card");

        if (cursos[i].id !== 6) {
            article.innerHTML = `
                <div class="card__imagen">
                    <picture>
                        <source srcset="${cursos[i].webp}">
                        <img loading="lazy" src="${cursos[i].imagen}" alt="imagen">
                    </picture>
                </div>
                <div class="card__contenido">
                    <h4 class="centrar-texto no-margin">${cursos[i].titulo}</h4>
                    <p class="centrar-texto">${cursos[i].descripcion}</p>
                    <a href="${cursos[i].url}" target="_blank" class="boton boton--platzi">Ver Certificado</a>
                </div>
            `;
        } else {
            article.innerHTML = `
                <div class="card__imagen">
                    <picture>
                        <source srcset="${cursos[i].webp}">
                        <img loading="lazy" src="${cursos[i].imagen}" alt="imagen">
                    </picture>
                </div>
                <div class="card__contenido">
                    <h4 class="centrar-texto no-margin">${cursos[i].titulo}</h4>
                    <p class="centrar-texto">${cursos[i].descripcion}</p>
                    <a href="#" target="_blank" class="boton boton--udemy">En curso</a>
                </div>
            `;
        }
        listaCursos.append(article);
        
    }



}

for (let i = 0; i <= cursos.length; i++) {
    mostrarCurso()
}