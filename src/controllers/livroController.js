import Livro from '../models/Livro.js';
import { Autor } from '../models/Autor.js';

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await Livro.find({})
      res.status(200).json(listaLivros)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async listaLivro(req, res) {
    try {
      const livro = await Livro.findById(req.params.id)
      res.status(200).json(livro)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` })
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body
    const autorId = novoLivro.autor

    try {
      const autorEncontrado = await Autor.findById(autorId)
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }}
      const livroCriado = await Livro.create(livroCompleto)
      res.status(201).json({ message: "criado com sucesso", livro: livroCriado })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` })
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({ message: "livro atualizado" })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na atualização` })
    }
  }

  static async excluirLivro(req, res) {
    try {
      await Livro.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: "livro excluído com sucesso" })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na exclusão` })
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editoraQuery = req.query.editora
    try {
      const livrosPorEditora = await Livro.find({ editora: editoraQuery })
      res.status(200).json(livrosPorEditora)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` })
    }
  }
}

export default LivroController