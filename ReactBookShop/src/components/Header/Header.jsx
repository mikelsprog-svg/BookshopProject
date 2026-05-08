import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CartSideBar } from '../Cart/CartSideBar'
import categories from '../../data/categories.json'
import './Header.css'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      navigate(`/SearchLibro?searchVal=${encodeURIComponent(searchInput.trim())}`)
      setMenuAbierto(null)
    }
  }

  const handleCategoryClick = (categoryId) => {
    navigate(`/SearchLibro?filterId=${categoryId}`)
    setMenuAbierto(null)
  }

  // Separar categorías adultas de las normales (opcional, por si quieres ocultarlas o marcarlas)
  const publicCategories = categories.filter(c => !c.isAdulta)
  const adultCategories = categories.filter(c => c.isAdulta)

  return (
    <header>
      {/* Barra superior */}
      <div className="header-top">
        <div className="logo">
          <Link to="/" aria-label="Ir al inicio">
            <img src="/favicon.svg" alt="Logo" />
          </Link>
        </div>
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Busca por título, autor o género"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="user-info">
          <CartSideBar />
          <span>Bienvenido, Jose Luis</span>
          <span>👤</span>
        </div>
      </div>

      {/* Barra de navegación */}
      <nav className="header-nav">

        {/* Categorías dinámicas */}
        <div
          className="nav-item"
          onClick={() => setMenuAbierto(menuAbierto === 'categorias' ? null : 'categorias')}
        >
          Categorías ↓
          {menuAbierto === 'categorias' && (
            <div className="dropdown">
              {publicCategories.map(cat => (
                <div
                  key={cat.Id}
                  className="dropdown-columna"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCategoryClick(cat.Id)
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <strong>{cat.Name}</strong>
                </div>
              ))}
              {adultCategories.length > 0 && (
                <>
                  <div className="dropdown-columna dropdown-separador">
                    <strong>🔞 Contenido adulto</strong>
                    {adultCategories.map(cat => (
                      <div
                        key={cat.Id}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCategoryClick(cat.Id)
                        }}
                        style={{ cursor: 'pointer', marginTop: '4px' }}
                      >
                        {cat.Name}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Más vendidos */}
        <a href="#">Más vendidos</a>

      </nav>
    </header>
  )
}

export default Header