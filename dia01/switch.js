//Exercício com Switch – Calculadora de Frete
//Situação corporativa: Em um e-commerce, o valor do frete varia conforme a região do cliente.
// Implemente a lógica de cálculo
// valor do frete:
// norte: R$ 30
// nordeste: R$ 25
// centro-oeste: R$ 20
// sudeste: R$ 15
// sul: R$ 10

const regiao = 'nordeste'

function calcularFrete(regiao) {
  let valorFrete = 0

  switch (regiao) {
    case 'norte':
      valorFrete = 30
      break
    case 'nordeste':
      valorFrete = 25
      break
    case 'sul':
      valorFrete = 10
      break
    case 'sudeste':
      valorFrete = 15
      break
    case 'centro-oeste':
      valorFrete = 20
      break
  }

  return `Frete para ${regiao}: R$ ${valorFrete}`
}

console.log(calcularFrete(regiao))



