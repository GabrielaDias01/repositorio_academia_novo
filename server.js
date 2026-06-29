require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usuariosRoutes = require("./BACK/ROUTES/usuarios_rotas");
const iaRoutes = require("./BACK/ROUTES/ia_routes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/usuarios", usuariosRoutes);
app.use("/ia", iaRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});