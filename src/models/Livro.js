import mongoose from 'mongoose'
const { Schema } = mongoose;
import { autorSchema } from './Autor.js';

const livroSchema = new Schema({
  titulo: { type: String, required: true },
  editora: String,
  preco: Number,
  paginas: Number,
  autor: autorSchema
})

const Livro = mongoose.model('livros', livroSchema);

export default Livro