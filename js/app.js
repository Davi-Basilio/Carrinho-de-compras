let valorTotalGeral = 0;

// Inicializa o carrinho limpo ao carregar a página
limpar();

function adicionar() {
  let produtoSelecionado = document.getElementById('produto').value;
  let quantidadeInput = document.getElementById('quantidade').value;

  // Validação básica da quantidade
  if (!quantidadeInput || quantidadeInput <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  // Separa o nome do produto e o valor usando o hífen
  let partes = produtoSelecionado.split('-');
  let nomeProduto = partes[0];
  let valorProduto = parseFloat(partes[1]);
  let quantidade = parseInt(quantidadeInput);

  // Calcula o subtotal do item
  let subtotal = quantidade * valorProduto;

  // Adiciona o produto na lista visual do carrinho
  let listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML += `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>
  `;

  // Atualiza o valor total geral
  valorTotalGeral += subtotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${valorTotalGeral}`;

  // Reseta o campo de quantidade para 1
  document.getElementById('quantidade').value = 1;
}

function limpar() {
  valorTotalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
  document.getElementById('quantidade').value = 1;
}
