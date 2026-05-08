import { CardBookComponent } from '../Products/CardBookComponent.jsx'
import './BestsellersRow.css'

export function BestsellersRow({ topBooks = [], onBookClick }) {
    if (!Array.isArray(topBooks) || topBooks.length === 0) {
        return null
    }

    return (
        <section className="bestsellers_section">
            <h2 className="bestsellers_title">Libros más vendidos</h2>
            <div className="bestsellers_row_container">
                {topBooks.map((book) => (   
                    <div key={book.Id} className="bestseller_book" 
                        onClick={() => onBookClick(book.Id)}>
                        <CardBookComponent book={book} />
                    </div>
                ))}
            </div>
                
           
        </section>
    )
}