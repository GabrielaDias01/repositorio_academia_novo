usuarios.forEach(usuario => {

    if (usuario.perfil === "administrador") {
        return; // pula esse usuário
    }

    tabela.appendChild(criaLinhaUsuario(usuario));

});

//o que vem do form-aluno
function criaLinhaUsuario(usuario) {
    var tr = document.createElement("tr");
    tr.classList.add("usuario");
    tr.dataset.id = usuario.id;

    var tdNome = document.createElement("td");
    tdNome.classList.add("td-nome");
    tdNome.textContent = usuario.nome;

    var tdEmail = document.createElement("td");
    tdEmail.classList.add("td-email");
    tdEmail.textContent = usuario.email;

    var tdPerfil = document.createElement("td");
    tdPerfil.classList.add("td-perfil");
    tdPerfil.textContent = usuario.perfil;

    var tdAcoes = document.createElement("td");
    tdAcoes.classList.add("td-acoes");

    var btnAtualizar = document.createElement("span");
    btnAtualizar.classList.add("btn-atualizar");
    btnAtualizar.textContent = "atualizar";

    btnAtualizar.addEventListener("click", function () {
        abrirModal(usuario);
    });

    tdAcoes.appendChild(btnAtualizar);

    var btnExcluir = document.createElement("span");
    btnExcluir.classList.add("btn-excluir");
    btnExcluir.textContent = "excluir";

    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPerfil);
    tr.appendChild(tdAcoes);

    return tr;
}

function criaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna;
}

function criaColunaAcoes() {
    var colunaAcoes = document.createElement("td");
    colunaAcoes.classList.add("td-acoes");

    var botaoAtualizar = document.createElement("span");
    botaoAtualizar.classList.add("btn-atualizar");
    botaoAtualizar.textContent = "atualizar";

    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btn-excluir");
    botaoExcluir.textContent = "excluir";

    colunaAcoes.appendChild(botaoAtualizar);
    colunaAcoes.appendChild(botaoExcluir);
    return colunaAcoes;
}

