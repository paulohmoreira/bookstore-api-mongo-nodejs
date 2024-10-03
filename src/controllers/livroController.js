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
}

export default LivroController