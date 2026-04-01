import { calcularImc, definirClassificacao } from "./opc.js";

let trs = document.querySelectorAll("tbody tr");

// laço de repetição
for (let index = 0; index < trs.length; index++) {
  let tr = trs[index];
  let filhos = tr.children;

  // notas
  let idade = filhos[1].textContent;
  let altura = filhos[2].textContent;
  let peso = filhos[3].textContent;

  idade = parseFloat(idade);
  altura = parseFloat(altura);
  peso = parseFloat(peso);

  // cálculo do IMC

  let resultado = calcularImc(peso, altura);
  filhos[4].textContent = resultado.toFixed(1);

  // classificação

  filhos[5].textContent = definirClassificacao(resultado);
}

// Cor
trs.forEach((tr) => {
  let filhos = tr.children;

  let status = filhos[5];

  if (status.textContent == "Peso normal") {
    status.style.backgroundColor = "#F4EFEC";
  } else if (status.textContent == "Sobrepeso") {
    status.style.backgroundColor = "#edf4d8";
  } else if (status.textContent == "Obesidade Grau I") {
    status.style.backgroundColor = "#cb9c9c";
  }
});
