const baseUrl = "https://repositorio-academia-novo.onrender.com/"

function obterUsuarios(){
    return fetch(`${baseUrl}usuarios`)
        .then(res => res.json());
}