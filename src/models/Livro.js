import mongoose from "mongoose";
const { Schema } = mongoose;

const livroSchema = new Schema({
  titulo: { 
    type: String, 
    required: [true, "O título é obrigatório"] 
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "autores", required: [true, "O(a) autor(a) é obrigatório"]
  },
  editora: {
    type: String, 
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Casa do código", "Alura"],
      message: "A editora fornecida não é um valor permitido."
    }
  },
  numeroPaginas: {
    type: Number,
    // min: [10, "O número de páginas deve estar entre 10 e 5000."],
    // max: [5000, "O número de páginas deve estar entre 10 e 5000."]
    validate: { 
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
    }
  }
});

const Livro = mongoose.model("livros", livroSchema);

export default Livro;