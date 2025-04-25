// 5. Exercício com While – Validador de Senha
// Situação corporativa: Durante o login, um sistema precisa garantir que o usuário
// insira uma senha correta. Você deve simular esse comportamento com um loop.

// Simule uma senha correta (ex: "1234") e peça a senha repetidamente (com prompt) até que seja digitada corretamente.

const senhaCorreta = '1234'

function validarSenha(senha) {
  let valorSenhaInformada = prompt('Digite a senha:')
  let tentativas = 0
  const maxTentativas = 3

  while (valorSenhaInformada !== senha && tentativas <= maxTentativas) {
    tentativas++
    if (tentativas < maxTentativas) {
      valorSenhaInformada = prompt('Senha incorreta. Tente novamente:')
    } else {
      alert('Número máximo de tentativas atingido. Acesso negado.')
    }
  }
}

validarSenha(senhaCorreta)
