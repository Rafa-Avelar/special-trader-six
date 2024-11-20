// Define a data final do contador
const dataFinal = new Date("2024-11-30T23:59:59");

const diasHTML = document.querySelector("#dias");
const horasHTML = document.querySelector("#horas");
const minutosHTML = document.querySelector("#minutos");
const segHTML = document.querySelector("#segundos");

// Função para atualizar o contador
function atualizarContador() {
  const agora = new Date();
  const diferenca = dataFinal - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").innerHTML = "Tempo encerrado!";
    clearInterval(intervalo);
    return;
  }

  // Calcula o tempo restante
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  diasHTML.innerHTML = `${dias} dias` ;
  horasHTML.innerHTML = `${horas} horas`;
  minutosHTML.innerHTML = `${minutos} minutos`;
  segHTML.innerHTML = `${segundos} segundos`;
  
  // Atualiza o HTML com o tempo restante
  document.getElementById(
    "contador"
  ).innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Atualiza o contador a cada segundo
const intervalo = setInterval(atualizarContador, 1000);

// Exibe o contador inicial imediatamente
atualizarContador();
