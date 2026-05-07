import './CardBookComponent.css'
import {useState} from "react";
import {StarGrid} from "./StarGrid.jsx";
import {useCart} from "../../customHooks/useCart.js";


export function CardBookComponent({book})
{

    const {addToCart} = useCart();
    return (

        <div className="book_component">
            <img className="book_image" src="/placeHolder.jpg" alt="Italian Trulli"/>
            <h3 className="book_title">{book.Name}</h3>
            <p className="data">{book.Author} </p>
            <p className="price">{book.Price} </p>
            <p className="discountPrice">{book.PriceAfterDiscount} </p>
            <StarGrid GlobalRating={book.GlobalRating}/>
            <button onClick={()=>addToCart(book)}  className="cart_button"> Añadir al carrito</button>
        </div>
    )
}