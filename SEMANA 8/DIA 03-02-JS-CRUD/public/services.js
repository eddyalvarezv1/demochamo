export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const response = await fetch(url)

  return await response.json()
}
