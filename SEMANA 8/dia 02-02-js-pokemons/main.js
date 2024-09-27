let page = 1
let count = 0
let totalPages = 0
const LIMIT = 9

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1 ) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JSON

  // console.log(data)

  return data
}

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `<article class="pokemon-item">
      ${pokemon.name}
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