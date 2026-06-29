const token = localStorage.getItem("token");
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!token || !usuario) {
    window.location.href = "login.html";
}

// Preenche os campos
document.getElementById("idUsuario").value = usuario.id;
document.getElementById("txtNomeAlterar").value = usuario.nome;
document.getElementById("txtEmailAlterar").value = usuario.email;

// Salvar alterações
document
    .getElementById("frmEditarPerfil")
    .addEventListener("submit", async (event) => {

        event.preventDefault();

        const id = document.getElementById("idUsuario").value;
        const nome = document.getElementById("txtNomeAlterar").value.trim();
        const email = document.getElementById("txtEmailAlterar").value.trim();
        const senha = document.getElementById("txtSenhaAlterar").value;
        const confirmarSenha = document.getElementById("txtConfirmarSenhaAlterar").value;

        // Validação
        if (!nome || !email) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não conferem.");
            return;
        }

        const dados = {
            nome,
            email
        };

        // Só envia a senha se o usuário digitou
        if (senha !== "") {
            dados.senha = senha;
        }

        try {

            // ALTERE ESTA URL PARA A SUA ROTA
            const resposta = await fetch(`https://repositorio-academia-novo.onrender.com/usuarios/${id}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify(dados)

            });

            if (!resposta.ok) {
                throw new Error("Erro ao atualizar usuário.");
            }

            // Atualiza o localStorage
            usuario.nome = nome;
            usuario.email = email;

            localStorage.setItem(
                "usuario",
                JSON.stringify(usuario)
            );

            alert("Perfil atualizado com sucesso!");

            window.location.href = "perfil.html";

        } catch (erro) {

            console.error(erro);

            alert("Não foi possível atualizar o perfil.");

        }

    });