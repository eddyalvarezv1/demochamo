let page = 1
let count = 0
let totalPages = 0
const LIMIT = 9

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1 ) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JSON

  const dataResults = data.results.map(pokemon => {
    // "url": "https://pokeapi.co/api/v2/pokemon/1/"
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  
    return {
      ...pokemon,
      id,
      image
    }
  })

  return {
    ...data,
    results: dataResults
  }
}

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  // TODO: Agregar una imagen a cada pokemon

  pokemons.forEach(pokemon => {
    elements += `<article class="pokemon-item">
      <h2>#${pokemon.id} ${pokemon.name}</h2>
      <img src="${pokemon.image}" width="80" height="80" />
    </article>`
  })

  pokemonsList.innerHTML = elements

  totalPages = Math.ceil(count / LIMIT)

  elCurrentPage.textContent = `${page} de ${totalPages}`
}

const elPrevPage = document.querySelector('#prevPage')
const elCurrentPage = document.querySelector('#currentPage')
const elNextPage = document.querySelector('#nextPage')
// const xPage = document.querySelector('#xPage')

// xPage.addEventListener('click', async () => {
//   page = 140

//   const dataPokemons = await fetchPokemons(page)

//   renderPokemons(dataPokemons.results)
// })

elNextPage.addEventListener('click', async () => {
  page = page + 1

  if (page > totalPages) {
    page = totalPages
    return
  }

  const dataPokemons = await fetchPokemons(page)

  renderPokemons(dataPokemons.results)
})

// TODO: Implementar el botón previous
elPrevPage.addEventListener('click', async () => {
  page = page - 1

  if (page <= 0) {
    page = 1
    return
  }

  const dataPokemons = await fetchPokemons(page)
  
  renderPokemons(dataPokemons.results)
})

fetchPokemons()
  .then(data => {
    count = data.count

    renderPokemons(data.results)
  })