import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooks } from '../customHooks/useBooks.js'
import { BestsellersRow } from '../components/Landing/BestsellersRow.jsx'
import { CategoriesRow } from '../components/Landing/CategoriesRow.jsx'
import './Landing.css'

export function Landing() {
    const navigate = useNavigate()
    const [pageNum, setPage] = useState(1)
    const { topBooks, loading, error } = useBooks("any", 1, "", -1)

 
    const handleCategoryClick = (categoryId) => {
        navigate(`/SearchLibro?filterId=${categoryId}`)
    }

    if (loading) {
        return (
            <main className="Landing">
                <div className="landing_header">
                    <h1>La web de las librerías independientes</h1>
                </div>
                <p>Cargando...</p>
            </main>
        )
    }

    if (error) {
        return (
            <main className="Landing">
                <div className="landing_header">
                    <h1>La web de las librerías independientes</h1>
                </div>
                <p>Error: {error}</p>
            </main>
        )
    }

    return (
        <main className="Landing">
            <div className="landing_header">
                <h1>La web de las librerías independientes</h1>
                <hr></hr>
            </div>

            {topBooks && topBooks.length > 0 && (
                <BestsellersRow 
                    topBooks={topBooks}
                />
            )}

            <CategoriesRow onCategoryClick={handleCategoryClick} />
        </main>
    );
}
