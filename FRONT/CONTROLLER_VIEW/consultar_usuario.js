var btnConsultar = document.querySelector("#btnConsultarUsuario");

function listarUsuarios() {

    var tbody = document.querySelector("#tabela-usuarios tbody");

    tbody.innerHTML = "";

    obterUsuarios()
        .then(function (usuarios) {

            console.log(usuarios);

            usuarios.forEach(function (usuario) {

                if (usuario.perfil === "administrador") {
                    return;
                }

                var linha = criaLinhaUsuario(usuario);
                tbody.appendChild(linha);

            });

        })
        .catch(function (erro) {
            console.error("Erro ao consultar usuários:", erro);
        });
}

btnConsultar.addEventListener("click", function () {
    listarUsuarios();
});