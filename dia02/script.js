const produtos = []

function cadastrarProduto(produto) {
  const produtoExistente = produtos.find(p => p.id === produto.id)
  const produtoComNomeExistente = produtos.find(p => p.nome === produto.nome)
  return produtoExistente && produtoComNomeExistente ? "Produto já cadastrado!" : produtos.push(produto)
}

function listarProdutos() {
  return produtos.map(produto => `ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco}, Categoria: ${produto.categoria}`)
}

function buscarProdutoPorNome(nome) {
  const produto = produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase())
  return produto ? `ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco}, Categoria: ${produto.categoria}` : "Produto não encontrado!"
}

function filtrarPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase())
    .map(produto => `ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco}, Categoria: ${produto.categoria}`)
}

//Teste das funções
cadastrarProduto({ id: 1, nome: "Air Fryer", preco: 300.0, categoria: "Eletrodomésticos" })
cadastrarProduto({ id: 2, nome: "Cafeteira", preco: 150.00, categoria: "Eletrodomésticos" })
cadastrarProduto({ id: 3, nome: "Liquidificador", preco: 200.00, categoria: "Eletrodomésticos" })
cadastrarProduto({ id: 4, nome: "Panela de Pressão", preco: 250.00, categoria: "Eletrodomésticos" })
cadastrarProduto({ id: 5, nome: "Ferro de Passar", preco: 100.00, categoria: "Eletrodomésticos" })
cadastrarProduto({ id: 6, nome: "Smartphone", preco: 1500.00, categoria: "Eletrônicos" })
cadastrarProduto({ id: 7, nome: "Notebook", preco: 3000.00, categoria: "Eletrônicos" })
cadastrarProduto({ id: 8, nome: "Tablet", preco: 1200.00, categoria: "Eletrônicos" })
cadastrarProduto({ id: 9, nome: "Smart TV", preco: 2500.00, categoria: "Eletrônicos" })
cadastrarProduto({ id: 10, nome: "Caixa de Som", preco: 500.00, categoria: "Eletrônicos" })
console.log(listarProdutos())
console.log(buscarProdutoPorNome("Air Fryer"))
console.log(filtrarPorCategoria("Eletrônicos"))
