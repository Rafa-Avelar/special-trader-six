const imageLinks = [
  "./assets/depoimento-1.png",
  "./assets/depoimento-2.png",
  "./assets/depoimento-3.png",
  "./assets/depoimento-4.png",
  "./assets/depoimento-5.png",
  "./assets/depoimento-6.png",
  "./assets/depoimento-7.png",
  "./assets/depoimento-8.png",
  "./assets/depoimento-9.png",
  "./assets/depoimento-10.png",
  "./assets/depoimento-11.png",
  "./assets/depoimento-12.png",
];

// Function to create and insert swiper slides
function insertSwiperSlides() {
  const container = document.querySelector(".container-slides-depoimentos"); // Assuming your swiper container has the class 'swiper-wrapper'

  for (let i = 0; i < imageLinks.length; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    const img = document.createElement("img");
    img.classList.add("w-full");
    img.src = imageLinks[i];
    img.alt = `depoimento-${i + 1}`;

    slide.appendChild(img);
    container.appendChild(slide);
  }
}

// Call the function to insert the slides
insertSwiperSlides();

