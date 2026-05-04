import './CardBookComponent.css'


export function CardBookComponent()
{
    return (

        <div className="book_component">
            <img className="book_image" src="title.jpg" alt="Italian Trulli"/>
            <h3 className="book_title">UNA MAÑANA POR EL CAMPO </h3>
            <p className="data">AUTOR </p>
            <p className="price">PRECIO </p>
            <p className="discountPrice">29,99€ </p>
            <button className="cart_button"> Añadir al carrito</button>
            <div className="star_grid">
                <img className="star" src="/starfull.png" alt="star"/>
                <img className="star" src="/starfull.png" alt="star"/>
                <img className="star" src="/starfull.png" alt="starempty"/>
                <img className="star" src="/starempty.png" alt="starempty"/>
                <img className="star" src="/starempty.png" alt="starempty"/>
            </div>

        </div>
    )
}