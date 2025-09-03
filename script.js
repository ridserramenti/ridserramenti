// Funzione per deselezionare la checkbox
function deselezionaCheckbox() {
    const checkbox = document.getElementById("check");
    checkbox.checked = false;
}

// Media query per larghezze minori di 950px
window.addEventListener('resize', function() {
    const checkbox = document.getElementById("check");
    const hero = document.querySelector(".hero");

    if (window.innerWidth > 800) {
        deselezionaCheckbox(); // Deselezioniamo la checkbox
        hero.style.marginTop = "65px"; // resettiamo margine hero
    }
});

// Verifica iniziale
if (window.innerWidth < 800) {
    deselezionaCheckbox(); // Deseleziona se la larghezza è già inferiore a 950px
}
const checkbox = document.getElementById("check");
const header = document.querySelector(".header");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        header.style.boxShadow = "none";
    } else {
        header.style.boxShadow = "0 5px 10px rgba(0, 0, 0, .3)";
    }
});

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');



// Popup form
const openBtn = document.getElementById("openFormBtn");
const popup = document.getElementById("formPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,          // Mobile default
    spaceBetween: 20,          // Spazio tra le immagini
    loop: true,                // Loop infinito
    autoplay: {
      delay: 3000,             // 3 secondi tra una slide e l’altra
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      800: { // Da tablet in su
        slidesPerView: 3
      }
    }
  });

  const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const checkbox = document.getElementById("check");
    checkbox.checked = false;
    // Rimetti margine corretto all'hero
    document.querySelector(".hero").style.marginTop = "65px";
  });
});