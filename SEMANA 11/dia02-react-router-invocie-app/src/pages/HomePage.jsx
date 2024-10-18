// DONE: listar los productos del siguiente endpoint renderizandolos en esta página
// https://dummyjson.com/products

import { useEffect, useState } from "react"

const fetchProducts = async () => {
  try {

    const url = 'https://dummyjson.com/auth/products'

    const authInfo = JSON.parse(localStorage.getItem('auth'))

    const token = authInfo?.accessToken

    const options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    const response = await fetch(url, options)

    if (response.status === 401) {
      throw new Error('Unauthorized')
    }

    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

// OAUTH2 -> Github, Google, etc

const HomePage = () => {
  const [products, setProduts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProduts(data.products))
  }, [])

  return (
    <section>
      <h1 className="font-bold">Listado de productos</h1>

      {products.map(product => {
        return <h3 key={product.id}>{product.title}</h3>
      })}
    </section>
  )
}

export default HomePage