const modal = document.querySelector("#modalAlterar");
const btnSalvar = document.querySelector("#btnSalvarAlteracao");
const btnCancelar = document.querySelector("#btnCancelarAlteracao");

/* FECHAR MODAL */

btnCancelar.addEventListener("click", function () {

    modal.style.display = "none";

});

/* ABRIR MODAL E PREENCHER DADOS */

window.abrirModal = function (usuario) {

    document.querySelector("#idUsuario").value = usuario.id;
    document.querySelector("#txtNomeAlterar").value = usuario.nome;
    document.querySelector("#txtEmailAlterar").value = usuario.email;

    modal.style.display = "flex";

}

/* SALVAR ALTERAÇÃO */

btnSalvar.addEventListener("click", function () {

    const id = document.querySelector("#idUsuario").value;
    const nome = document.querySelector("#txtNomeAlterar").value;
    const email = document.querySelector("#txtEmailAlterar").value;
    const senha = document.querySelector("#txtSenhaAlterar").value;
    const confirmarSenha = document.querySelector("#txtConfirmarSenhaAlterar").value;

    if (senha !== confirmarSenha) {

        alert("As senhas não conferem!");
        return;

    }

    const usuario = {
        nome,
        email,
        senha
    };

    fetch(`https://repositorio-academia-novo.onrender.com/usuarios/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)

    })
        .then(() => {

            alert("Usuário atualizado com sucesso!");

            modal.style.display = "none";

            listarUsuarios();

        })
        .catch(erro => {

            console.error(erro);

            alert("Erro ao atualizar usuário");

        });

});