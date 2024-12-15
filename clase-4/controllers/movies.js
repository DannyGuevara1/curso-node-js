import { MovieModel } from '../models/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MoviesController {
  static async getAll (req, res) {
    const { genre, page, limit } = req.query
    const movies = await MovieModel.getAll({ genre, page, limit })
    res.json({ data: movies })
  }

  static async getById (req, res) {
    const { id } = req.params
    const movie = await MovieModel.getById({ id })
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' })
    }
    res.json({ data: movie })
  }

  static async create (req, res) {
    const result = validateMovie(req.body)

    if (!result.success) {
      return res.status(400).json(result.error)
    }

    const newMovie = await MovieModel.create({ input: result.data })

    res.status(201).json({ data: newMovie }) // para actualizar la cache del cliente
  }

  static async update (req, res) {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json(result.error)
    }

    const { id } = req.params
    const updateMovie = await MovieModel.update({ id, input: result.data })
    if (updateMovie === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    return res.json({ data: updateMovie })
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await MovieModel.delete({ id })
    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    res.status(200).json({ message: 'Movie deleted' })
  }
}
