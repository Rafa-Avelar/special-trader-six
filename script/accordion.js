const accordionData = [
  {
    id: 1,
    header: "O que é o Special Trader 6 (ST6)?",
    body: "É um Hub de Day Trade que oferece uma combinação de Indicadores Avançados, Programa Educacional completo e Sistema Profissional de Gestão de Trade. O ST6 é estruturado para acelerar seus resultados positivos no mercado financeiro.",
  },
  {
    id: 2,
    header: "Quanto tempo terei acesso aos indicadores?",
    body: "1 ano.",
  },
  {
    id: 3,
    header: "Quanto tempo terei acesso ao treinamento?",
    body: "1 ano.",
  },
  {
    id: 4,
    header: "Quanto tempo de acesso a TradingPro?",
    body: "6 meses.",
  },
  {
    id: 5,
    header: "Preciso ter experiência no Day Trade para participar do ST6?",
    body: "Não é necessária nenhuma experiência no mercado. No ST6 você aprende do absoluto zero.",
  },
  {
    id: 6,
    header: "Quanto tempo preciso me dedicar diariamente ao ST6?",
    body: "Apenas 1 hora por dia.",
  },
  {
    id: 7,
    header: "Quais são os pré-requisitos para participar do ST6?",
    body: "Tudo o que você precisa é m PC ou notebook simples e conexão com a internet.",
  },
  {
    id: 8,
    header: "Há suporte durante o treinamento?",
    body: "Sim. Você poderá tirar dúvidas e interagir em nossos canais de comunicação.",
  },
  {
    id: 9,
    header: "Como funciona a garantia?",
    body: "Oferecemos uma garantia incondicional de 7 dias. Sendo assim, você pode entrar, acessar o conteúdo e, se não se adaptar, entender que não é para você naquele momento ou até mesmo se arrepender nos primeiros 7 sete dias, pode solicitar o reembolso dentro desse prazo e nós devolveremos 100% do valor investido. Simples assim, sem complicação",
  },
  {
    id: 10,
    header: "Como acessar?",
    body: `
      Após realizar o pagamento e ter sido confirmado com sucesso, você receberá o acesso imediato ao nosso portal de aulas com o seu login e senha por e-mail.<br>
      Você poderá acessar o portal pelo link que receber (<a href="https://special.sixtraders.com.br" target="_blank">https://special.sixtraders.com.br</a>) via e-mail ou clicar em Entrar, no topo da página do site. Caso encontre qualquer dificuldade com a senha, é só utilizar a função “Esqueceu sua senha?”.<br>
      Se tiver alguma dúvida, não se preocupe, o nosso suporte está sempre disposto a ajudar da melhor maneira. É só enviar uma mensagem para: <a href="mailto:contato@sixtraders.com.br">contato@sixtraders.com.br</a> ou WhatsApp <a href="https://wa.me/5511979727524" target="_blank">+55 (11) 97972-7524</a>.
    `,
  },
];

function createAccordionItem(item) {
  const wrapper = document.createElement("div");
  wrapper.classList.add(
    "hover:opacity-75",
    "transition-all",
    "accordion-item",
    "cursor-pointer",
    "flex",
    "flex-col",
    "gap-6",
    "p-6",
    "rounded-lg",
    "border-[1px]",
    "border-GRAY-BORDER-75"
  );

  const header = document.createElement("div");
  header.classList.add("accordion-header");
  header.innerHTML = `<p class="font-HEAD font-medium text-body18 text-WHITE">${item.header}</p>`;
  wrapper.addEventListener("click", () => toggleAccordion(wrapper));

  const body = document.createElement("div");
  body.classList.add("accordion-body");
  body.innerHTML = `<p class="font-HEAD font-light text-body18 text-WHITE">${item.body}</p>`;

  wrapper.appendChild(header);
  wrapper.appendChild(body);

  return wrapper;
}

function toggleAccordion(item) {
  const body = item.querySelector(".accordion-body");
  body.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const accordionWrapper = document.querySelector(".accordion-wrapper");
  accordionWrapper.innerHTML = "";
  accordionData.forEach((item) => {
    const accordionItem = createAccordionItem(item);
    accordionWrapper.appendChild(accordionItem);
  });
});

