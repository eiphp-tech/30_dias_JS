//2. Exercício com Arrays – Filtrar Usuários Ativos
//Situação corporativa: Você está desenvolvendo uma interface de administração. 
// Precisa filtrar e exibir apenas os usuários com status "ativo".

const usuarios = [
  { nome: "Maria", status: "ativo" },
  { nome: "João", status: "inativo" },
  { nome: "Ana", status: "ativo" }
]

const usuariosAtivos = usuarios.filter(usuarios => usuarios.status === 'ativo')
console.log(usuariosAtivos) 