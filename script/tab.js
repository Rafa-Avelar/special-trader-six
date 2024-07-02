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
      image: "", // Add image path if any
    },
    {
      id: 2,
      title: "Sinal Intuitivo",
      text: "2",
      image: "", // Add image path if any
    },
    {
      id: 3,
      title: "Economia de tempo",
      text: "3",
      image: "", // Add image path if any
    },
    {
      id: 4,
      title: "Consistência de lucros",
      text: "4",
      image: "", // Add image path if any
    },
  ];

  function updateContent(index) {
    const activeTab = contents.find((ct) => ct.id === index);
    tabContentText.innerHTML = activeTab.text;
    tabContentImage.style.backgroundImage = `url(${activeTab.image})`; // Assuming you use background-image
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
