import {StarGrid} from "../Products/StarGrid.jsx";

import {useCart} from "../../customHooks/useCart.js";


export  function BookInfoBig({book})
{
    const { addToCart } = useCart();


    return( <div className="book_info_div">
        <img className="book_image_product_page" src="/placeHolder.jpg" alt="Italian Trulli"/>
        <div className="book_info_description">
            <h2 className="book_info_heading">
                {book.Name}
            </h2>
            <StarGrid GlobalRating={book.GlobalRating}/>
            <p className="book_info_author">
                {book.Author}
            </p>
            <p className="book_description">
                {book.Description}
            </p>
            <StarGrid GlobalRating={book.GlobalRating}/>

        </div>
        <div className="book_purchase_div">
            <strong className="price">     {book.Price}</strong>
            <strong className="discountPrice"> {book.PriceAfterDiscount}</strong>
            <button onClick={()=>addToCart(book)} className="book_add_cart"> Add to cart </button>

        </div>
    </div>)

}