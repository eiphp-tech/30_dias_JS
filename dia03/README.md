# Dia03 - Sistema de Gerenciamento de Reuniões

## 📚 Descrição

Projeto desenvolvido para consolidar conhecimentos de **JavaScript básico e intermediário**, com foco em:

- Manipulação de **arrays** e **objetos**
- Utilização de **funções**
- Estruturação de **fluxos lógicos** simples
- Controle de **operações CRUD** (_Create, Read, Update, Delete_)

Este sistema simula o agendamento, listagem, edição e cancelamento de reuniões corporativas, replicando cenários comuns em ambientes empresariais.

---

## 🛠️ Tecnologias Utilizadas

- Linguagem: **JavaScript Vanilla**
- Ambiente de execução: **Node.js** ou **navegador**

---

## 🚀 Funcionalidades

- **Agendar Reunião**
  - Registra uma nova reunião com título, data e participantes.
- **Listar Reuniões**
  - Exibe todas as reuniões agendadas em formato organizado.
- **Editar Participantes**
  - Permite atualizar a lista de participantes de uma reunião existente.
- **Cancelar Reunião**
  - Remove uma reunião específica do sistema.
- **Procurar Reunião por Data**
  - Busca e exibe reuniões marcadas para uma data específica.

---

## 📈 Estrutura de Dados

As reuniões são armazenadas em um array de objetos no seguinte formato:

```javascript
const reunioes = [
  {
    titulo: "Revisão de Sprint",
    data: "2025-05-02",
    participantes: ["Ana", "Carlos", "Pedro"],
  },
]
```

---

## 🔧 Como Utilizar

1. **Agendar uma nova reunião**

   ```javascript
   agendarReuniao("Revisão de Sprint", "2025-05-02", ["Ana", "Carlos", "Pedro"])
   ```

2. **Listar todas as reuniões**

   ```javascript
   listarReunioes()
   ```

3. **Editar participantes de uma reunião existente**

   ```javascript
   editarParticipantes("Revisão de Sprint", ["Ana", "Carlos", "Pedro", "João"])
   ```

4. **Cancelar uma reunião**

   ```javascript
   cancelarReuniao("Revisão de Sprint")
   ```

5. **Procurar reunião por data**
   ```javascript
   procurarReuniaoPorData("2025-05-02")
   ```

---

## 🌟 Melhorias Futuras (Backlog)

- Implementar validações de dados de entrada.
- Permitir múltiplas reuniões por dia na busca.
- Melhorar formatação da listagem de reuniões.
- Persistência dos dados usando **localStorage** ou **banco de dados leve**.
- Criação de interface gráfica simples com **HTML/CSS**.

---

## 💬 Observação

Este projeto foi construído com o objetivo principal de **praticar e consolidar fundamentos de JavaScript**, alinhando o código à dinâmica de projetos reais.

---

# 📌 Autor

**Pedro Henrique Pereira de Jesus**  
Desenvolvedor Front-end em formação | Entusiasta de Tecnologia e Design

---
