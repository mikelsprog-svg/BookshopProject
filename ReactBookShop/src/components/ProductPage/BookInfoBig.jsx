import {useCart} from "../../customHooks/useCart.js";
import {Link} from "react-router-dom";


export  function BookInfoBig({book})
{
    const { addToCart } = useCart();
    const formattedPrice = `${Number(book.PriceAfterDiscount ?? book.Price ?? 0).toFixed(2).replace('.', ',')}€`;


    return( <div className="book_info_div">
        <div className="book_info_visual">
            <img className="book_image_product_page" src={book.Image}  alt={book.Name}/>
        </div>
        <div className="book_info_description">
            <h2 className="book_info_heading">
                {book.Name}
            </h2>
            <p className="book_info_author">
                {book.Author}
            </p>
            <p className="book_description">
                {book.Description}
            </p>

        </div>
        <div className="book_purchase_div">
            <p className="book_purchase_price">{formattedPrice}</p>
            <button onClick={()=>addToCart(book)} className="book_add_cart">Añadir cesta</button>
            <Link to="/" className="book_continue_link">Continuar comprando</Link>

        </div>
    </div>)

}