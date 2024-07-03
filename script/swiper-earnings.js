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

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to create and insert swiper slides
function insertSwiperSlidesDepo() {
  const containerOne = document.querySelector(".ganhos-container-1");

  // Shuffle the depoimentosLinks array
  shuffleArray(depoimentosLinks);

  // Split the array into two parts
  const half = Math.ceil(depoimentosLinks.length / 2);
  const firstHalf = depoimentosLinks.slice(0, half);
  const secondHalf = depoimentosLinks.slice(half);

  // Function to create slides
  function createSlides(container, links) {
    links.forEach((link, index) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide", "rounded-md", "ganhos-slide-card");

      const img = document.createElement("img");
      img.classList.add("w-full", "overflow-hidden");
      img.src = link;
      img.alt = `depoimento-${index + 1}`;

      slide.appendChild(img);
      container.appendChild(slide);
    });
  }

  // Create slides for both containers
  createSlides(containerOne, depoimentosLinks);
}

// Call the function to insert the slides
insertSwiperSlidesDepo();
