// Objetivo 1 - Quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista
//     - Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
// Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar.
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// Passo 2 +- Dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if (ehUltimoCartao) return;

    // Passo 4 - Buscar o cartão que estar selecionado e esconder.

    esconderCartaoSelecionado();

    // Passo 3 - Fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele.

    cartaoAtual++;
    mostrarCartao();



});

// Objetivo 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista

// Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar.

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (ehPrimeiroCartao) return;

    // Passo 4 - Buscar o cartão que estar selecionado e esconder.

    esconderCartaoSelecionado();


    // Passo 3 - Fazer aparecer o cartão anterior da lista, colocando a classe selecionado nele.

    cartaoAtual--;
    mostrarCartao();



});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
