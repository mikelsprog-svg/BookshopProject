import './CardBookComponent.css'
import {useState} from "react";
import {StarGrid} from "./StarGrid.jsx";
import {useCart} from "../../customHooks/useCart.js";
import { Link } from 'react-router-dom'

export function CardBookComponent({book})
{
    const handleBookClick = (bookId) => {
        navigate(`/BookPage?bookId=${bookId}`)
    }
    const {addToCart} = useCart();
    return (

        <div className="book_component">
           <Link to={"/BookPage?bookId="+book.Id} >
                <img className="book_image" src={book.Image} alt="Italian Trulli"/>
            </Link>
            <h3 className="book_title">{book.Name}</h3>
            <p className="data">{book.Author} </p>
            <p className="price">{book.Price} </p>
            <p className="discountPrice">{book.PriceAfterDiscount} </p>
            <StarGrid GlobalRating={book.GlobalRating}/>
            <button onClick={() => addToCart(book)} className="cart_button"> Añadir al carrito</button>
        </div>
    )
}