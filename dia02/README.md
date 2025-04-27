# 🚀 Dia 02 - Sistema de Cadastro Simples de Produtos

## 📋 Descrição do Exercício

**Objetivo:**  
Desenvolver um sistema básico em JavaScript para realizar o cadastro, a listagem e a busca de produtos de um estoque corporativo.

**Requisitos:**

- Criar um array para armazenar os produtos.
- Cada produto deve conter as propriedades: `id`, `nome`, `preco` e `categoria`.
- Implementar funcionalidades para:
  - Cadastrar produtos.
  - Listar todos os produtos.
  - Buscar produtos por nome.
  - Filtrar produtos por categoria.

---

## ✅ Como Eu Resolvi

### Estratégia Técnica

1. **Estruturação do Armazenamento:**

   - Criação do array `produtos` para armazenar os objetos de forma dinâmica.

2. **Funções Criadas:**

   - `cadastrarProduto(produto)`:  
     Verifica se o `id` ou o `nome` já estão cadastrados para evitar duplicidade. Caso contrário, adiciona o novo produto no array.

   - `listarProdutos()`:  
     Utiliza `.map()` para percorrer e formatar os dados dos produtos para exibição.

   - `buscarProdutoPorNome(nome)`:  
     Utiliza `.find()` para localizar o produto pelo nome (desconsiderando maiúsculas e minúsculas).

   - `filtrarPorCategoria(categoria)`:  
     Utiliza `.filter()` para retornar todos os produtos de uma categoria específica, também com normalização de texto.

3. **Boas Práticas Aplicadas:**
   - Uso de métodos modernos de array (`find`, `filter`, `map`).
   - Normalização de inputs para garantir maior precisão nas buscas.
   - Respostas claras e tratamento para cenários onde o produto não é encontrado.

---

## 🚀 Tecnologias Utilizadas

- JavaScript (ES6+)
- Programação Funcional (métodos de arrays)
- Estruturas de Controle e Funções

---

## 🔥 Próximos Passos (Melhorias Futuras)

- Implementar a função de edição de produtos.
- Implementar a função de remoção de produtos.
- Formatar os preços no padrão brasileiro (ex.: "R$ 99,90").
- Padronizar as respostas das funções para integrar com futuras APIs.

---
