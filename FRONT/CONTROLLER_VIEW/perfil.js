const token = localStorage.getItem("token");
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!token || !usuario) {
    window.location.href = "login.html";
}

document.querySelector("#nome").textContent = usuario.nome;
document.querySelector("#email").textContent = usuario.email;
document.querySelector("#perfil").textContent = usuario.perfil;

const usuarioArea = document.querySelector("#usuarioArea");
const areaAdm = document.querySelector("#admArea");

if (usuario.perfil !== "administrador") {
    areaAdm.style.display = "none";
}

if (usuario.perfil === "administrador") {
    usuarioArea.style.display = "none";
}

document.querySelector("#btnSair").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../../login.html";
});