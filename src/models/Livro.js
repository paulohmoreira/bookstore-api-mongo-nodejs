import mongoose from 'mongoose'
const { Schema } = mongoose;

const livroSchema = new Schema({
  titulo: String,
  editora: String,
  preco: Number,
  paginas: Number
})

const Livro = mongoose.model('livros', livroSchema);

export default Livro