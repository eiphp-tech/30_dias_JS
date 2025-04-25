// 1. Exercício com Loops – Geração de Relatório de Tarefas
//Situação corporativa: Você recebeu uma lista de tarefas e precisa gerar um
// relatório numerado para exibição em um dashboard simples.

const listaDasTarefas = ["Revisar layout do site", "Corrigir bug no menu", "Atualizar README", "Publicar release"]

// Gere um relatório formatado:
function gerarRelatorio(tarefas) {
  let relatorio = "Relatório de Tarefas:\n\n"
  for (let i = 0; i < tarefas.length; i++) {
    relatorio += `${i + 1}. ${tarefas[i]}\n`
  }
  return relatorio
}
console.log(gerarRelatorio(listaDasTarefas))


