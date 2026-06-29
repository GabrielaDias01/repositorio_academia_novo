require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usuariosRoutes = require("./BACK/ROUTES/usuarios_rotas");
const iaRoutes = require("./BACK/ROUTES/ia_routes");

const app = express();

app.use(cors({
  origin: "https://academiadiasfit.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/ia", iaRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});