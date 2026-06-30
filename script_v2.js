const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const sobre = document.querySelector(".sobre");
const solapaDerecha = document.querySelector(".solapa-derecha");
const solapaIzquierda = document.querySelector(".solapa-izquierda");
const corazon = document.querySelector(".corazon");

document.addEventListener("click", (e) => {
    const videoLocal = document.getElementById("videoLetra");

    if (e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        
        envoltura.classList.add("abierto");
        envoltura.classList.add("desactivar-sobre");

        if (videoLocal) {
            videoLocal.play().catch(error => console.log("Error al reproducir el video:", error));
        }

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                
                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } 
    else if (e.target.matches(".envoltura-sobre") || e.target.matches(".carta") || e.target.matches(".carta *")) {
        
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre");

        if (videoLocal) {
            videoLocal.pause();
            videoLocal.currentTime = 0; 
        }

        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");
            
            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
            }, 500);
        }
    }
});