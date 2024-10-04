import { Autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await Autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async listaAutor(req, res) {
    try {
      const autor = await Autor.findById(req.params.id);
      res.status(200).json(autor);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await Autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const autorAtualizado = await Autor.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({ message: "autor atualizado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na atualização` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      await Autor.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "autor excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na exclusão` });
    }
  }
}

export default AutorController;