function mostrarHeader(){
    //traemos el header del documento html
    const header = document.getElementById('header');
    //añadimos una clase a el elemeto header
    header.classList.add("header");
    
    console.log(header);
    //añadimos el html al header
    header.innerHTML = `
        <div class="bg">
            <div class="contenedor">
                <div class="barra">
                    <a href="index.html" class="logo">
                        <h1 class="logo__nombre no-margin centrar-texto">Geovanni<span class="logo__bold">Vera</span>
                         Frontend Developer</h1>
                    </a>
                    <nav class="navegacion">
                        <a href="nosotros.html" class="navegacion__enlace">Sobre mi</a>
                        <a href="cursos.html" class="navegacion__enlace">Cursos</a>
                        <a href="contacto.html" class="navegacion__enlace">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>
        `;
}
mostrarHeader();