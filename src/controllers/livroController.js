import Livro from '../models/Livro.js';

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
    try {
      const novoLivro = await Livro.create(req.body)
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` })
    }
  }
}

export default LivroController