const botao = document.querySelector("#botaoMensagem");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
    if (mensagem.textContent === "") {
        mensagem.textContent =
            "Esperamos você para um café especial! ☕";
    } else {
        mensagem.textContent = "";
    }
});