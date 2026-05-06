import './CardBookComponent.css'
import {useState} from "react";


export function CardBookComponent({book})
{
    return (

        <div className="book_component">
            <img className="book_image" src="title.jpg" alt="Italian Trulli"/>
            <h3 className="book_title">{book.Name}</h3>
            <p className="data">{book.Author} </p>
            <p className="price">{book.Price} </p>
            <p className="discountPrice">{book.PriceAfterDiscount} </p>
            <button className="cart_button"> Añadir al carrito</button>
            <div className="star_grid">
                {[...Array(5)].map((_, i) => (
                    <img
                        key={i}
                        className="star"
                        src={i < book.GlobalRating ? "/starfull.png" : "/starempty.png"}
                        alt="star"
                    />
                ))}


            </div>

        </div>
    )
}