var tabela = document.querySelector("#tabela-usuarios");

tabela.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation(); //evita que o evento suba para outros elementos

    var elementoClicado = event.target;

    if (elementoClicado.classList.contains("btn-excluir")) {

        var linha = elementoClicado.closest("tr");

        var idUsuario = linha.dataset.id;

        fetch(`https://repositorio-academia-novo.onrender.com/usuarios/${idUsuario}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(dados => {

            console.log(dados);

            listarUsuarios();
        })
        .catch(erro => {
            console.log(erro);
        });
    }
})