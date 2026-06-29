const btnCadastrarUsuario = document.getElementById("btnCadastrarUsuario");
const areaCadastro = document.querySelector(".area-cadastro");

areaCadastro.style.display = "none";

btnCadastrarUsuario.addEventListener("click", () => {
    areaCadastro.style.display =
        areaCadastro.style.display === "none"
            ? "block"
            : "none";
});