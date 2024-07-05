// Sample data for indicators
const indicators = [
  {
    id: 1,
    name: "RAPTOR 6",
    description: [
      "Como um predador rápido e assertivo, o Raptor 6 detecta com precisão as melhores oportunidades de compra e venda nos pullbacks, viabilizando que você opere apenas alguns minutos por dia.",
      "A sua abordagem lógica focada no índice de acerto, impressiona até mesmo os traders mais experientes e bem-sucedidos do mercado.",
    ],
    indicatorImage: "./assets/RAPTOR-INDICADOR.png",
    resultImage: "./assets/RAPTOR-RESULTADO.png",
    activeButton: "indicator",
  },
  {
    id: 2,
    name: "TEXAS 6",
    description: [
      "Inspirado na essência do <i>Lone Star State</i> e historicamente lucrativo, o Texas 6 traz robustez em um conceito de plotagem diferente, frequentemente gerando sinais de compra e venda no chamado Flag Pattern do Price action.",
      "O algoritmo também se destaca por emitir alertas somente quando há fluxo de qualidade. Isso o posiciona como um indicador confiável tanto de Fluxo quanto de Tendência.",
    ],
    indicatorImage: "./assets/TEXAS-INDICADOR.png",
    resultImage: "./assets/TEXAS-RESULTADO.png",
    activeButton: "indicator",
  },
  {
    id: 3,
    name: "SUPERNOVA 6",
    description: [
      "Essa ferramenta poderosa captura a reversão de tendência de curto prazo e gera sinais certeiros de forma simples e intuitiva. Com a técnica <i>contrarian</i> e equilíbrio perfeito entre taxa de acerto e payoff, a Supernova 6 traz clareza para suas decisões, proporcionando tranquilidade e confiança na execução dos seus trades.",
    ],
    indicatorImage: "./assets/SUPERNOVA-INDICADOR.png",
    resultImage: "./assets/SUPERNOVA-RESULTADO.png",
    activeButton: "indicator",
  },
  {
    id: 4,
    name: "ROUTE 6",
    description: [
      "O mais famoso e aclamado indicador da Six projetado para colocar você na rota da consistência de lucros.",
      "Se você tem o perfil para operações ultrarrápidas com foco no payoff, este é o indicador mais recomendado pra você.",
    ],
    indicatorImage: "./assets/ROUTE-INDICADOR.png",
    resultImage: "./assets/ROUTE-RESULTADO.png",
    activeButton: "indicator",
  },
];

function generateIndicatorComponent(indicator) {
  const imageUrl =
    indicator.activeButton === "result"
      ? indicator.resultImage
      : indicator.indicatorImage;
  return `
    <div id='${
      indicator.name
    }' class="section-content border-b-[1px] border-GRAY-BORDER-75 w-full last:border-b-[0px]">
      <div class="w-full padding-container-right">
        <div class="md:py-[148px] py-[84px] pl-4 pr-4 md:pr-0 md:pl-12 w-full flex flex-col md:flex-row items-start justify-between gap-8">
          <div class="w-full">
            <h4 class="head-text-primary text-head48 uppercase font-head font-light">
              ${indicator.name}
            </h4>
            <div class="mt-6 lg:max-w-[440px] flex flex-col gap-4">
              ${indicator.description
                .map(
                  (desc) => `
              <p class="body-text-primary text-body18 text-white font-normal">
                ${desc}
              </p>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="w-full lg:max-w-[484px] flex flex-col items-center">
            <div data-id="${
              indicator.id
            }" class="container-toggle-visao w-full flex items-center justify-center gap-6">
              <button data-type="indicator-btn" class="visao-indicador indicator-btn transition-all ${
                indicator.activeButton === "indicator" && "active"
              } indicator-btn">
                Visão do indicador
              </button>
              <button data-type="result-btn" class="visao-resultado result-btn transition-all ${
                indicator.activeButton === "result" && "active"
              }">
                Ver Resultado
              </button>
            </div>
            <div class="w-full h-[274px] rounded-md mt-4 indicator-image relative">
              <img class="w-full object-cover" src="${imageUrl}" alt="${
    indicator.name
  }" />
              <div data-id="${
                indicator.id
              }" class="expand-button z-40 flex justify-center items-center cursor-pointer transition-all hover:opacity-100 bg-opacity-75 opacity-0 absolute top-0 left-0 w-full h-full bg-black">
                <p class="font-BTN text-white text-body16 font-bold">Clique para expandir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderIndicators() {
  const container = document.querySelector(".indicadores-container");
  if (!container) return;

  container.innerHTML = indicators.map(generateIndicatorComponent).join("");

  const resultButtons = document.querySelectorAll(".result-btn");
  const indicatorButtons = document.querySelectorAll(".indicator-btn");
  const expandButtons = document.querySelectorAll(".expand-button");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  const openModal = (id) => {
    if (id) {
      console.log("called with id: " + id);
      const indicator = indicators.find((ind) => ind.id == id);
      modalImage.src = indicator.indicatorImage;
      modalImage.alt = indicator.name;
      modal.classList.remove("hidden");
    } else {
      modal.classList.remove("hidden");
    }
  };

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModalHandler();
    }
  });

  expandButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (modalImage.alt == "initial") {
        const indicatorId = btn.closest("[data-id]").dataset.id;
        openModal(indicatorId);
      }
      openModal();
    });
  });

  resultButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const indicatorId = e.target.closest("[data-id]").dataset.id;
      const indicator = indicators.find((ind) => ind.id == indicatorId);
      modalImage.src = indicator.resultImage;
      modalImage.alt = indicator.name;

      indicator.activeButton = "result";
      renderIndicators(); // Re-render indicators
    });
  });

  indicatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const indicatorId = e.target.closest("[data-id]").dataset.id;
      const indicator = indicators.find((ind) => ind.id == indicatorId);
      modalImage.src = indicator.indicatorImage;
      modalImage.alt = indicator.name;

      indicator.activeButton = "indicator";
      renderIndicators(); // Re-render indicators
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id !== "modalImage") {
      modal.classList.add("hidden");
    }
  });
}

// Initial render
renderIndicators();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section-content");
  const indicators = document.querySelectorAll(".indicator-btn-nav");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          indicators.forEach((indicator) => {
            if (indicator.dataset.id === entry.target.id) {
              indicator.classList.add("active-nav-indicator");
            } else {
              indicator.classList.remove("active-nav-indicator");
            }
          });
        }
      });
    },
    {
      threshold: 0.6, // Adjust this value to determine how much of the section should be visible before triggering
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
