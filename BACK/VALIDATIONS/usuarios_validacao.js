function validarUsuario(req, res, next) {

    const { nome, email, senha } = req.body;

    req.body.perfil = req.body.perfil || "usuario";

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "O nome é obrigatório"
        });
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
        return res.status(400).json({
            erro: "Digite um e-mail válido"
        });
    }

    if (
        req.body.perfil !== "administrador" &&
        req.body.perfil !== "usuario"
    ) {
        return res.status(400).json({
            erro: "Perfil inválido"
        });
    }

    if (!senha || senha.trim() === "") {
        return res.status(400).json({
            erro: "A senha é obrigatória!"
        });
    }

    next();
}

module.exports = validarUsuario;