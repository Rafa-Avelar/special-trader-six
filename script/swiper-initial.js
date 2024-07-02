// Array of objects containing title, description, and link

const slideData = [
  {
    title: "Indicadores Proprietários ST6",
    desc: "Os Indicadores 6 fazem todo o trabalho pesado de análise pra você. São ferramentas fáceis de utilizar que otimizam a leitura de mercado e aumentam a precisão dos seus trades.",
    link: {
      to: "#indicadores",
      text: "Ver indicadores",
    },
  },
  {
    title: "Setups testados e validados",
    desc: "Dentro de um ambiente chamado Six Lab testamos e validamos as estratégias. Você pode conferir os resultados para ter mais tranquilidade e assertividade ao operar.",
  },
  {
    title: "Sistema de Gestão de trade ",
    desc: "Faça o seu diário de trading online, crie e personalize facilmente o seu plano geral de trade, mantenha a organização operacional, analise métricas de desempenho e muito mais.",
  },
  {
    title: "Mentoria ST6",
    desc: "No ST6 reconhecemos as diversas possibilidades de bons resultados e te orientamos a ter clareza nas decisões. Você vai descobrir o que funciona melhor para o seu perfil.",
  },
];

function createSlide(data) {
  const slide = document.createElement("div");
  slide.className =
    "swiper-slide w-full max-w-[696px] border-GRAY-BORDER-75 border-[1px] p-8 rounded-[4px]";

  slide.innerHTML = `
    <h6 class="font-HEAD font-bold text-head24">${data.title}</h6>
    <p class="body-text-primary text-body16 mt-4 text-GRAY-400 ">${
      data.desc
    }</p>
    ${
      data.link
        ? `<div class='mt-4'>
        <a
          class="font-BTN text-body16 text-WHITE font-bold"
          href="${data.link.to}"
        >
          Ver indicadores
        </a></div>`
        : "<div class='mt-4'><br/></div>"
    }
  `;

  return slide;
}

// Append each slide to the swiper-wrapper
const swiperWrapper = document.querySelector(".swiper-wrapper");
slideData.forEach((data) => {
  console.log(data);
  swiperWrapper.appendChild(createSlide(data));
});
