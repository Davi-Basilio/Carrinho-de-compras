let tudo;
// document.getElementById ('lista-produtos').innerHTML = '';
// tudo = '';
// document.getElementById ('valor-total').textContent = 'Nenhum item ainda'
// tudo virou:
Menos();

function Mais() {
let thing = document.getElementById ('produto').value;
let nameOfProduct = thing.split('-')[0];
let valeuProduct = thing.split('R$')[1];
let quantus = document.getElementById ('quantidade').value;

let soma = quantus * valeuProduct;

let miniCar = document.getElementById('lista-produtos');
miniCar.innerHTML = miniCar.innerHTML + `        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantus}x</span> ${nameOfProduct} <span class="texto-azul">R$${soma}</span>
        </section>`;

tudo = tudo + soma;
let lugarTudo = document.getElementById ('valor-total');
lugarTudo.textContent = `R$ ${tudo}`; 
document.getElementById ('quantidade').value = 0;
}


function Menos() {
  tudo = 0;
  document.getElementById ('lista-produtos').innerHTML = '';
  // tudo = '';
  document.getElementById ('valor-total').textContent = ' Nada ainda'
}