const depoimentosLinks = [
  "./assets/ganhos-e-agradecimentos-1.png",
  "./assets/ganhos-e-agradecimentos-2.png",
  "./assets/ganhos-e-agradecimentos-3.png",
  "./assets/ganhos-e-agradecimentos-4.png",
  "./assets/ganhos-e-agradecimentos-5.png",
  "./assets/ganhos-e-agradecimentos-6.png",
  "./assets/ganhos-e-agradecimentos-7.png",
  "./assets/ganhos-e-agradecimentos-8.png",
  "./assets/ganhos-e-agradecimentos-9.png",
  "./assets/ganhos-e-agradecimentos-10.png",
];

// Function to create and insert swiper slides
function insertSwiperSlidesDepo() {
  const container = document.querySelector(".ganhos-container"); // Assuming your swiper container has the class 'swiper-wrapper'

  for (let i = 0; i < depoimentosLinks.length; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.classList.add("rounded-md");

    const img = document.createElement("img");
    img.classList.add("w-full");
    img.classList.add("overflow-hidden");
    img.src = depoimentosLinks[i];
    img.alt = `depoimento-${i + 1}`;

    slide.appendChild(img);
    container.appendChild(slide);
  }
}

// Call the function to insert the slides
insertSwiperSlidesDepo();
