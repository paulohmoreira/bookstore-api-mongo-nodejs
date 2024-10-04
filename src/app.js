import "dotenv/config";
import express from "express";
import dbConnect from "./config/dbConnection.js";
import routes from "./routes/index.js";

const PORT = 3000;
const conexao = await dbConnect();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
