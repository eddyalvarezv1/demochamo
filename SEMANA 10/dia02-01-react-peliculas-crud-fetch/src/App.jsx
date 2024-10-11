const App = () => {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <strong>CRUD de Películas con React + Fetch API</strong>
          </li>
        </ul>
      </nav>

      <section className="container-fluid">
        <div className="grid">
          <div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="peliculas__list">
                <tr>
                  <td>1</td>
                  <td>Imagen 1</td>
                  <td>Pelicula 1</td>
                  <td>Acciones</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <form id="peliculasForm">
              <h2>Nueva película</h2>

              <input type="text" name="nombre" placeholder="Mi pelicula" required />
              <input type="text" name="imagen" placeholder="https://..." required />
              <input type="date" name="estreno" placeholder="estreno" required />
              <select name="genero" required>
                <option value="">Selecciona un genero...</option>
                <option value="1">Comedia</option>
                <option value="2">Acción</option>
                <option value="3">Animación</option>
                <option value="4">Aventura</option>
              </select>
              <textarea name="resumen" placeholder="Resumen de mi película"></textarea>

              <input type="submit" value="Guardar" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App