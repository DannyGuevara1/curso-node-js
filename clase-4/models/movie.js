import { randomUUID } from 'node:crypto'
import { readJSON } from '../utils.js'
// 1.da ImportDeclaration
// import movies from './movies.json' with { type: 'json' };
// 2.da usando require y createRequire es la forma recomendada
const movies = readJSON('./movies.json')
export class MovieModel {
  static async getAll ({ genre, page, limit }) {
    let moviesToReturn = movies
    if (page && limit) {
      const start = (page - 1) * limit
      const end = parseInt(start) + parseInt(limit)
      moviesToReturn = movies.slice(start, end)
    }

    if (genre) {
      const moviesByGenre = moviesToReturn.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
      moviesToReturn = moviesByGenre
    }

    return moviesToReturn
  }

  static async getById ({ id }) {
    return movies.find(movie => movie.id === id)
  }

  //
  static async create ({ input }) {
    const newMovie = {
      id: randomUUID(),
      ...input
    }

    movies.push(newMovie)
    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) {
      return false
    }

    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) {
      return false
    }

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input
    }

    return movies[movieIndex]
  }
}
