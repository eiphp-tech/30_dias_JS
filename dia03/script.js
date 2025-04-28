const reunioes = []

function agendarReuniao(titulo, data, participantes) {
  const novaReuniao = {
    titulo: titulo,
    data: data,
    participantes: participantes,
  }
  return reunioes.push(novaReuniao)
}

function listarReunioes() {
  return reunioes.map(
    (reuniao) =>
      `${reuniao.titulo} - ${reuniao.data} - participantes: ${reuniao.participantes}`
  )
}

function editarParticipantes(titulo, novosParticipantes) {
  const reuniao = reunioes.find((r) => r.titulo === titulo)
  if (!reuniao) {
    console.log("Reunião não encontrada.")
    return
  }
  reuniao.participantes = [...novosParticipantes]
  console.log("Participantes atualizados com sucesso.")
}

function cancelarReuniao(titulo) {
  const indice = reunioes.findIndex((r) => r.titulo === titulo)
  if (indice !== -1) {
    reunioes.splice(indice, 1)
    return true
  } else {
    return false
  }
}

function procurarReuniaoPorData(data) {
  const reuniao = reunioes.find((r) => r.data === data)
  if (reuniao) {
    return `${reuniao.titulo} - ${reuniao.data} - participantes: ${reuniao.participantes}`
  } else {
    return null
  }
}
