var btnSalvarUsuario = document.querySelector("#btnCadastrar");

btnSalvarUsuario.addEventListener("click", function (event) {
    event.preventDefault();

    var frmUsuario = document.querySelector("#frmUsuario");

    if (validarFormularioUsuario(frmUsuario) == false) {
        return;
    }

    var usuario = obtemUsuarioDoFormulario(frmUsuario);

    fetch("https://repositorio-academia-novo.onrender.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
        .then(response => response.json())
        .then(dados => {
            console.log("Usuário salvo:", dados);

            frmUsuario.reset();
        })
        .catch(erro => {
            console.error("Erro ao salvar:", erro);
        });
});

function obtemUsuarioDoFormulario(frmUsuario) {
    return {
        nome: frmUsuario.nome.value,
        email: frmUsuario.email.value,
        senha: frmUsuario.senha.value
    };
}

function validarFormularioUsuario(frmUsuario) {
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";

    if (frmUsuario.nome.value.length == 0) {
        criaMensagem("Nome inválido");
        return false;
    };

    if (frmUsuario.email.value.length == 0 || !frmUsuario.email.value.includes("@")) {
        criaMensagem("Digite um e-mail válido!");
        return false;
    };

    if (frmUsuario.senha.value.length == 0) {
        criaMensagem("Senha Inválida");
        return false;
    };
    if (frmUsuario.senha.value !== frmUsuario.confirmarSenha.value) {
        criaMensagem("As senhas não coincidem!");
        return;
    };
    return true;
}

function criaMensagem(texto) {
    var msg = document.createElement("div");
    msg.classList.add("alert", "alert-warning");
    msg.textContent = texto;

    document.querySelector("#divMensagens").appendChild(msg);
}