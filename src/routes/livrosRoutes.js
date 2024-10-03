import express from 'express'
import LivroController from '../controllers/livroController.js'

const routes = express.Router()

routes.get('/livros', LivroController.listarLivros)
routes.get('/livros/:id', LivroController.listaLivro)

export default routes