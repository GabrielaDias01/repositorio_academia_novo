const express = require("express");
const router = express.Router();

const usuariosController = require("../CONTROLLER/usuario_controller");
const validarUsuario = require("../VALIDATIONS/usuarios_validacao");


/* LOGIN */
router.post("/login", usuariosController.login);

router.get("/", usuariosController.listar);
router.post("/", validarUsuario, usuariosController.salvar);
router.delete("/:id", usuariosController.excluir);
router.put("/:id", usuariosController.atualizar);





module.exports = router;