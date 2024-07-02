const videos = [
  {
    time: "42:5min",
    title: "Introdução a Bolsa de Valores",
    link: "#",
    status: "watching",
  },
  {
    time: "40:10min",
    title: "Principais índices de mercado",
    link: "#",
    status: "locked",
  },
  {
    time: "40:10min",
    title: "A consciência da Variância",
    link: "#",
    status: "locked",
  },
  { time: "40:10min", title: "Lagarta <br>", link: "#", status: "locked" },
  {
    time: "40:10min",
    title: "Modelo de Processo",
    link: "#",
    status: "locked",
  },
  {
    time: "40:10min",
    title: "O Espectro da Emoção",
    link: "#",
    status: "locked",
  },
  {
    time: "40:10min",
    title: "A Natureza da Confiança",
    link: "#",
    status: "locked",
  },
  { time: "40:10min", title: "Injetando lógica", link: "#", status: "locked" },
  // Add more video objects as needed
];

let currentVideo = null;

function renderVideos(videoArray) {
  const swiperWrapper = document.querySelector(".video-list-container");
  swiperWrapper.innerHTML = ""; // Clear existing content

  videoArray.forEach((video, index) => {
    const videoCard = document.createElement("div");
    videoCard.classList.add(
      "cursor-pointer",
      "swiper-slide",
      "w-full",
      "max-w-[280px]",
      "p-6",
      "rounded-md",
      "flex",
      "flex-col",
      "video-height"
    );

    if (video.status === "watching") {
      videoCard.classList.add("video-active");
    } else {
      videoCard.classList.add("video-off");
    }

    videoCard.innerHTML = `
      <div>
        <p class="whitespace-pre font-HEAD text-head24 leading-tight font-light text-white">${
          video.title
        }</p>
        <span class="font-BODY text-body14 text-white font-light mt-2">${
          video.time
        }</span>
      </div>
      <div class="mt-4">
        <p class="font-BTN text-white font-bold text-body14">${
          video.status === "watching" ? "Assistindo" : "Desbloquear aula"
        }</p>
      </div>
      
    `;

    videoCard.addEventListener("click", () => {
      currentVideo = video;
      console.log("Current video:", currentVideo);
    });

    swiperWrapper.appendChild(videoCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderVideos(videos);
});
