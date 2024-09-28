console.log('Hola JS')

const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const response = await fetch(url)

  return await response.json()
}

const renderPeliculas = (peliculas = []) => {
  const peliculasList = document.querySelector('.peliculas__list')

  let elementos = ''

  peliculas.forEach(pelicula => {
    elementos += `
      <tr>
        <td>${pelicula.id}</td>
        <td>
          <img
            src="${pelicula.imagen}"
            width="100"
            height="250"
          />
        </td>
        <td>
          <strong>${pelicula.nombre}</strong>
          <div class="fs-small">
            <strong>Release:</strong> ${pelicula.estreno}
          </div>
          <div class="fs-small">
            <strong>Genero:</strong> ${pelicula.generoId}
          </div>
          <div class="fs-small">
            <strong>Resumen:</strong> ${pelicula.resumen}
          </div>
        </td>
        <td>
          <div class="flex gap-0.5">
            <button class="pelicula__edit">✏</button>
            <button class="pelicula__remove">❌</button>
          </div>        
        </td>
      </tr>
    `
  })

  peliculasList.innerHTML = elementos
}

fetchPeliculas()
  .then(peliculas => renderPeliculas(peliculas))