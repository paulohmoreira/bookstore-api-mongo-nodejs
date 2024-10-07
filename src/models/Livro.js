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
    required: [true, "A editora é obrigatória"]
  },
  numeroPaginas: {type: Number}
});

const Livro = mongoose.model("livros", livroSchema);

export default Livro;