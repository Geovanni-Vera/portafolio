function mostrarFooter() {
    //traemos el footer del documento html
    const header = document.getElementById('footer');

    console.log(header);
    //añadimos el html al header
    header.innerHTML = `
        <div class="contenedor">
            <div class="barra">
                    <a href="index.html" class="logo">
                    <h2 class="logo__nombre no-margin centrar-texto">Geovanni<span class="logo__bold">Vera</span></h2>
                </a>
                <nav class="navegacion">
                    <a href="nosotros.html" class="navegacion__enlace">Nosotros</a>
                    <a href="cursos.html" class="navegacion__enlace">Cursos</a>
                    <a href="contacto.html" class="navegacion__enlace">Contacto</a>
                </nav>
            </div>
        </div>
        `;
}
mostrarFooter();