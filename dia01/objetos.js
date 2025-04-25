// 3. Exercício com Objetos – Gerar Mensagens Personalizadas
// Situação corporativa: Um sistema de e-mail marketing precisa exibir mensagens
// personalizadas para clientes, com base em seus dados.

const cliente = {
  nome: "Carlos",
  idade: 28,
  cidade: "São Paulo",
  plano: "premium",
}

function gerarMensagem(clientes) {
  return `Olá ${clientes.nome}, com ${clientes.idade} anos em ${clientes.cidade}, você está no palno ${clientes.plano}.
 Aproveite nossos benefícios!!`
}
console.log(gerarMensagem(cliente))
