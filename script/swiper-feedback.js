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

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to create and insert swiper slides
function insertSwiperSlides() {
  const containerOne = document.querySelector(".container-slides-depoimentos");

  // Shuffle the imageLinks array
  shuffleArray(imageLinks);

  // Split the array into two parts
  const half = Math.ceil(imageLinks.length / 2);
  const firstHalf = imageLinks.slice(0, half);
  const secondHalf = imageLinks.slice(half);

  // Function to create slides
  function createSlides(container, links) {
    links.forEach((link, index) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide", "swiper-slide-custom"); // Add the custom class

      const img = document.createElement("img");
      img.classList.add("w-full");
      img.src = link;
      img.alt = `depoimento-${index + 1}`;

      slide.appendChild(img);
      container.appendChild(slide);
    });
  }

  // Create slides for both containers
  createSlides(containerOne, imageLinks);
}

// Call the function to insert the slides
insertSwiperSlides();
