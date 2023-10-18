const pantalla = document.querySelector(".pantalla")
const botonones = document.querySelectorAll(".btn")


botonones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;

        if (boton.id === "c"){
            pantalla.textContent = "0"
            return;
        }

        if (boton.id === "borrar"){

            if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!"){
                pantalla.textContent = "0"
                return;
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
                return;
            }

        }

        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent = "ERROR!";
            }
            return;
        }
        
        
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!"){
            pantalla.textContent = botonApretado
        }else{
            pantalla.textContent += botonApretado
        }
    })
})