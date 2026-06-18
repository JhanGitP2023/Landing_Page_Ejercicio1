document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el Menú Responsive Lateral
    var sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);

    // Inicializar el ScrollSpy para el efecto de scroll suave
    var spyElems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(spyElems, { scrollOffset: 70 });

    // Inicializar el Slider principal
    var sliderElems = document.querySelectorAll('.slider');
    M.Slider.init(sliderElems, {
        indicators: true, // Muestra los puntitos de navegación abajo
        height: 440,      // Altura del slider en píxeles
        duration: 500,    // Duración de la transición (ms)
        interval: 4000    // Tiempo entre cada imagen (4 segundos)
    });
});