import z from 'zod'

// Definir el esquema de validación para las películas
const movieSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string'
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().min(1),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(
      [
        'Action',
        'Adventure',
        'Comedy',
        'Drama',
        'Fantasy',
        'Horror',
        'Mystery',
        'Thriller',
        'Western',
        'Sci-Fi',
        'Biography'
      ],
      {
        message: 'Invalid genre',
        required_error: 'Genre is required',
        invalid_type_error: 'Genre must be a string'
      }
    )
  ),
  rate: z.number().min(0).max(10).default(0)
})

export function validateMovie (object) {
  return movieSchema.safeParse(object)
}

export function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}
