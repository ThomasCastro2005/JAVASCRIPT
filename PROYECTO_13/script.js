let progreso = document.querySelector('.progreso');
let porcentaje = document.querySelector('.porcentaje');
let celebracion = document.querySelector('body');
let avance = 0;

let tiempo = setInterval(() => {
    avance += 1;
    progreso.style.width = `${avance}%`


    if (avance === 50) {
        progreso.classList.add("progresoRojo")
        porcentaje.classList.add("porcentajeRojo")
    }
    if (avance === 100) {
        clearInterval(tiempo);
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent = `${avance}%`
}, 75)