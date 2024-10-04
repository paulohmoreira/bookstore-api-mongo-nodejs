import mongoose from "mongoose";
import Autor from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await Autor.find();
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  }

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;

      const autorResultado = await Autor.findById(id);

      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        res.status(404).send({message: "Id do Autor não localizado."});
      }
    } catch (erro) {
      if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
      } else {
        res.status(500).send({message: "Erro interno de servidor."});
      }
    }
  };

  static async cadastrarAutor(req, res) {
    try {
      let autor = new Autor(req.body);

      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      res.status(500).send({message: `${erro.message} - falha ao cadastrar Autor.`});
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;

      await Autor.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;

      await Autor.findByIdAndDelete(id);

      res.status(200).send({message: "Autor removido com sucesso"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  }
}

export default AutorController;