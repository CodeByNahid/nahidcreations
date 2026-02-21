function navigate(page) {
    window.location.href = page;
}

/* Typewriter */
const text = "Welcome to Nahid's Creations";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = function () {
    typeWriter();
};

/* Black Particles */
particlesJS("particles-js", {
    particles: {
        number: { value: 90 },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 4 },
        move: { speed: 2 },
        line_linked: {
            enable: true,
            color: "#000000",
            opacity: 0.4
        }
    }
});
