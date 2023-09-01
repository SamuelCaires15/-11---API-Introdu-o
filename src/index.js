import express from "express";
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);
dotenv.config();


app.get("/", (req, res) => {
  res.json({
    nome: "Walisson_Fernandes_Dias",
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});