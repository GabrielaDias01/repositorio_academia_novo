const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

console.log("Usuário:", usuarioLogado);

if (!usuarioLogado) {
    console.log("Não está logado");
    window.location.href = "login.html";
} else {
    console.log("Está logado");
}

document.querySelector("#btnSair").addEventListener("click", () => {

    localStorage.clear();

    window.location.href = "./FRONT/VIEW/HTML/login.html";
});


