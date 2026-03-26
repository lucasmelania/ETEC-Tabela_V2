import {calcularImc, definirClassificacao} from './opc.js'

let trs = document.querySelectorAll('tbody tr')

// laço de repetição
for (let index = 0; index < trs.length; index++)
 {
    let tr = trs[index]
    let filhos = tr.children
    
    // notas
    let idade = filhos[1].textContent
    let altura= filhos[2].textContent
    let peso = filhos[3].textContent

    idade = parseFloat(idade)
    altura = parseFloat(altura)
    peso = parseFloat(peso)

      // cálculo do IMC

  let resultado = calcularImc(peso, altura)
    filhos[4].textContent = resultado.toFixed(1)


    // classificação

    filhos[5].textContent = definirClassificacao(resultado)
}

   



 