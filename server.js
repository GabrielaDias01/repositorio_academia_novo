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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});