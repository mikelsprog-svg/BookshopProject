import { useState } from 'react'
import { CartSideBar } from '../Cart/CartSideBar'
import './Header.css'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(null)

  return (
    <header>
      {/* Barra superior */}
      <div className="header-top">
        <div className="logo">
          <img src="/favicon.svg" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Busca por titulo, autor o genero" />
          <button>🔍</button>
        </div>
        <div className="user-info">
          <CartSideBar />
          <span>Bienvenido, Jose Luis</span>
          <span>👤</span>
        </div>
      </div>

      {/* Barra de navegación */}
      <nav className="header-nav">

        {/* Categorías */}
        <div className="nav-item" onClick={() => setMenuAbierto(menuAbierto === 'categorias' ? null : 'categorias')}>
          Categorías ↓
          {menuAbierto === 'categorias' && (
            <div className="dropdown">
              <div className="dropdown-columna">
                <strong>📖 Novela</strong>
                <ul>
                  <li>Romance</li>
                  <li>Drama</li>
                  <li>Misterio</li>
                  <li>Thriller</li>
                  <li>Novela Contemporánea</li>
                  <li>Novela histórica</li>
                </ul>
              </div>
              <div className="dropdown-columna">
                <strong>🚀 Ciencia Ficción</strong>
                <ul>
                  <li>Distopías</li>
                  <li>Viajes en el tiempo</li>
                  <li>Inteligencia artificial</li>
                  <li>Espacio y exploración</li>
                </ul>
              </div>
              <div className="dropdown-columna">
                <strong>🧠 Desarrollo Personal</strong>
                <ul>
                  <li>Productividad</li>
                  <li>Hábitos</li>
                  <li>Liderazgo</li>
                  <li>Motivación</li>
                  <li>Inteligencia emocional</li>
                </ul>
              </div>
              <div className="dropdown-columna">
                <strong>📚 Historia y Biografías</strong>
                <ul>
                  <li>Biografías de personajes famosos</li>
                  <li>Historia antigua</li>
                  <li>Historia moderna</li>
                  <li>Historia militar</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Infantil y juvenil */}
        <div className="nav-item" onClick={() => setMenuAbierto(menuAbierto === 'infantil' ? null : 'infantil')}>
          Infantil y juvenil ↓
          {menuAbierto === 'infantil' && (
            <div className="dropdown">
              <div className="dropdown-columna">
                <strong>👶 Primeros lectores</strong>
                <ul>
                  <li>Cuentos ilustrados</li>
                  <li>Libros de imágenes</li>
                </ul>
              </div>
              <div className="dropdown-columna">
                <strong>📘 Juvenil</strong>
                <ul>
                  <li>Aventura</li>
                  <li>Fantasía</li>
                  <li>Romance joven</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Más vendidos */}
        <a href="#">Mas vendidos</a>

      </nav>
    </header>
  )
}

export default Header