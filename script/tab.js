document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");
  const tabContentText = document.querySelector(".tab-content-text");
  const tabContentImage = document.querySelector(".tab-content-image");
  const nextButton = document.querySelector(".tab-button-next");
  let currentTabId = 1;

  const contents = [
    {
      id: 1,
      title: "Algoritmos de Alta Precisão",
      text: "Nossos indicadores foram desenvolvidos com base em modelos matemáticos avançados e anos de pesquisa no comportamento do mercado, resultando em sinais de compra e venda incrivelmente precisos.",
      image: "./assets/algoritmos-de-alta-precisao.png", // Add image path if any
    },
    {
      id: 2,
      title: "Sinais Intuitivos",
      text: "Elimine a necessidade de análises e interpretações subjetivas. Na atual dinâmica do mercado, ferramentas que fornecem o momento exato de entrada e saída do trade podem ser seu ponto de inflexão.",
      image: "./assets/sinais-intuitivos.png", // Add image path if any
    },
    {
      id: 3,
      title: "Economia de tempo",
      text: "O tempo é o recurso mais valioso que você possui. Não é apenas sobre dinheiro, mas sobre a liberdade de aproveitar a vida. Passar horas intermináveis diante da tela do computador pode ser estressante e desgastante. O ST6 foi projetado para mudar isso.",
      image: "./assets/economia-de-tempo.png", // Add image path if any
    },
    {
      id: 4,
      title: "Consistência de lucros",
      text: "A confiança de saber que suas operações são baseadas em estratégias testadas e validadas permite que você atue no mercado de forma tranquila, viabilizando resultados sólidos ao longo do tempo.",
      image: "./assets/consistencia-de-lucros.png", // Add image path if any
    },
  ];

  function updateContent(index) {
    const activeTab = contents.find((ct) => ct.id === index);
    tabContentText.innerHTML = activeTab.text;
    tabContentImage.src = `${activeTab.image}`; // Assuming you use background-image
    tabContentImage.classList.add('object-cover')
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    tabs[index - 1].classList.add("active-tab");
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      currentTabId = index + 1;
      updateContent(currentTabId);
    });
  });

  nextButton.addEventListener("click", () => {
    currentTabId = currentTabId === contents.length ? 1 : currentTabId + 1;
    updateContent(currentTabId);
  });

  // Initialize the first tab as active
  updateContent(currentTabId);
});
