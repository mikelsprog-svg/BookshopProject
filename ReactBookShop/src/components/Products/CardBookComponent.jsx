import './CardBookComponent.css'
import {useState} from "react";
import {StarGrid} from "./StarGrid.jsx";


export function CardBookComponent({book})
{
    return (

        <div className="book_component">
            <img className="book_image" src="/placeHolder.jpg" alt="Italian Trulli"/>
            <h3 className="book_title">{book.Name}</h3>
            <p className="data">{book.Author} </p>
            <p className="price">{book.Price} </p>
            <p className="discountPrice">{book.PriceAfterDiscount} </p>
            <StarGrid GlobalRating={book.GlobalRating}/>
            <button className="cart_button"> Añadir al carrito</button>
        </div>
    )
}