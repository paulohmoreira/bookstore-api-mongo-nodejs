import mongoose from "mongoose";
const { Schema } = mongoose;

const autorSchema = new Schema({
  nome: { type: String, required: true },
  nacionalidade: String,
});

const Autor = mongoose.model("autores", autorSchema);

export default Autor;