const model = require('../MODEL/services/usuario_services');
const authService = require('../MODEL/services/auth_services');

exports.listar = (req,res) => {
    model.listarUsuarios((resultado) => {
        res.json(resultado);
    });
};

exports.salvar = (req, res) => {

    const usuario = req.body;

    // FORÇA PERFIL PADRÃO
    usuario.perfil = usuario.perfil || "usuario";

    model.cadastrarUsuario(usuario, (resultado) => {
        res.status(201).json({
            mensagem: "Usuário cadastrado"
        });
    });
};

exports.excluir = (req,res) => {
    const id = req.params.id;
    model.excluirUsuario(id, (resultado) => {
        res.status(201).json({mensagem: "Usuário excluído com sucesso!"});
    });
};

exports.atualizar = (req, res) => {

    const id = req.params.id;
    const usuario = req.body;

    model.atualizarUsuario(id, usuario, (resultado) => {

        res.status(200).json({
            mensagem: "Usuário atualizado com sucesso!"
        });

    });

};

exports.login = (req,res)=>{

    const {email, senha} = req.body;

    model.login(

        email,
        senha,

        (resultado)=>{

            if(resultado.erro){

                return res.status(401).json(resultado);

            }

            res.json(resultado);

        }

    );

}
