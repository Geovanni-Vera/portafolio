const publicaciones = [
    {
        titulo: "Blog De Cafe",
        descripcion: "Landig page Blog de Cafe",
        url: "https://ornate-cat-e0713f.netlify.app/",
        imagen: "./imagen/blogcafe.webp",
        
    },
    {
        titulo: "Calculadora",
        descripcion: "Calculadora JS - HTML5 - CSS",
        url: "https://capable-axolotl-14b09c.netlify.app/",
        imagen: "./imagen/Calculadora.webp",
        
    },
    {
        titulo: "Reloj JS",
        descripcion: "Reloj JS - HTML5 - CSS",
        url: "https://startling-genie-ce21ce.netlify.app/",
        imagen: "./imagen/Reloj.png",
        
    },
    {
        titulo: "qr-code",
        descripcion: "FrontendMentory",
        url: "https://serene-cupcake-81476d.netlify.app/",
        imagen: "./imagen/qr.webp",
    },
    {
        titulo:"Pokedex",
        descripcion:"pokeapi",
        url:"https://vocal-snickerdoodle-e8bd8e.netlify.app/",
        imagen:"./imagen/Pokedex.webp"
    }

];


const proyectos = document.querySelector('#proyectos')
console.log(publicaciones[0].alt);

function mostrarPublicacion() {
    for (let i = 0; i <= publicaciones.length; i++) {
        
        const article = document.createElement('article');
        article.classList.add("card");
        article.innerHTML = `
                <div class="card__imagen">
                    <img loading="lazy" src="${publicaciones[i].imagen}" alt="imagen">
                </div>
                <div class="card__contenido">
                    <h4 class="centrar-texto no-margin">${publicaciones[i].titulo}</h4>
                    <p class="centrar-texto">${publicaciones[i].descripcion}</p>
                    <div class="iconos">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5"
                            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                            <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3"
                            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                            <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript"
                            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                            <path d="M7.5 8h3v8l-2 -1" />
                            <path
                                d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                        </svg>
                    </div>
                    <a href="${publicaciones[i].url}" target="_blank" class="boton boton--primario">Ver Proyecto</a>
                </div>
            `;
            proyectos.append(article);
    }
    

}

for(let i = 0; i <= publicaciones.length;i++){
    mostrarPublicacion()
}