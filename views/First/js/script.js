
// Corazones flotantes

function crearCorazon() {
    if (document.hidden ||
        window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches) {
        return;
    }

    const corazon = document.createElement("span");

    corazon.className = "corazon-flotante";
    corazon.textContent = Math.random() > 0.5 ? "♥" : "♡";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    const duracion = Math.random() * 5 + 6;

    corazon.style.animationDuration = duracion + "s";

    document.body.appendChild(corazon);

    corazon.addEventListener("animationend", () => {
        corazon.remove();
    });
}

setInterval(crearCorazon, 700);


// Sorpresa de cumpleaños

function celebrarCumpleanos() {
    const sorpresa = document.getElementById("sorpresa");

    if (!sorpresa) return;

    sorpresa.classList.remove("oculto");

    sorpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    lanzarConfeti();
}


// Confeti de cumpleaños

function lanzarConfeti() {
    const colores = [
        "#d86d78",
        "#d6b477",
        "#f8dce1",
        "#ffffff",
        "#ff9fb2"
    ];

    for (let i = 0; i < 70; i++) {
        const pieza = document.createElement("span");

        pieza.style.position = "fixed";
        pieza.style.width = "8px";
        pieza.style.height = "12px";
        pieza.style.background =
            colores[Math.floor(Math.random() * colores.length)];

        pieza.style.left = Math.random() * 100 + "vw";
        pieza.style.top = "-20px";
        pieza.style.zIndex = "9999";
        pieza.style.pointerEvents = "none";

        document.body.appendChild(pieza);

        const duracion = Math.random() * 1800 + 1800;

        const animacion = pieza.animate([
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 40}px) rotate(720deg)`,
                opacity: 0
            }
        ], {
            duration: duracion,
            easing: "ease-in",
            fill: "forwards"
        });

        animacion.onfinish = () => pieza.remove();
    }
}



// Abrir carta romántica

function abrirCarta() {
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");
    const indicacion = document.getElementById("indicacionSobre");

    if (!sobre || !carta) return;

    if (sobre.classList.contains("abierto")) return;

    sobre.classList.add("abierto");
    sobre.setAttribute("aria-expanded", "true");

    if (indicacion) {
        indicacion.textContent =
            "Esta carta lleva un pedacito de mi corazón. ❤️";
    }

    setTimeout(() => {
        carta.classList.remove("oculto");

        setTimeout(() => {
            carta.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 250);

    }, 1400);
}


// Cerrar y guardar carta

function cerrarCarta() {
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");
    const indicacion = document.getElementById("indicacionSobre");

    if (!sobre || !carta) return;

    carta.classList.add("oculto");
    sobre.classList.remove("abierto");
    sobre.setAttribute("aria-expanded", "false");

    if (indicacion) {
        indicacion.textContent =
            "Preparé algo especial para ti. Toca el corazón para descubrirlo. 💌";
    }

    sobre.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

