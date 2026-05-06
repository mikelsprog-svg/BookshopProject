import Header from "../components/Header/Header.jsx";
import "./ProductPage.css"

export function ProductPage()
{

    return (

    <main className="ProductPage">
        <div className="book_info_div">
            <img className="book_image_product_page" src="title.jpg" alt="Italian Trulli"/>
            <div className="book_info_description">
                <h2 className="book_info_heading">
                    TITULO
                </h2>
                <div className="star_grid">
                    <img className="star" src="/starfull.png" alt="star"/>
                    <img className="star" src="/starfull.png" alt="star"/>
                    <img className="star" src="/starfull.png" alt="starempty"/>
                    <img className="star" src="/starempty.png" alt="starempty"/>
                    <img className="star" src="/starempty.png" alt="starempty"/>
                </div>
                <p className="book_info_author">
                    Autor
                </p>
                <p className="book_description">

                    My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?

                </p>


            </div>
            <div className="book_purchase_div">
                <strong className="price"> 22.99 NOK</strong>
                <strong className="discountPrice"> 22.99 NOK</strong>
                <button className="book_add_cart"> Add to cart </button>

            </div>
        </div>
        <div className="user_review_div" >
            <div className="value_panel">
                <h3> Nota media 3 Estrellas</h3>
                <div className="number_stars">
                    <p>5 Estrellas : 20%</p>
                    <p>4 Estrellas : 20%</p>
                    <p>3 Estrellas : 20%</p>
                    <p>2 Estrellas : 20%</p>
                    <p>1 Estrella  : 20%</p>
                </div>
            </div>
            <div className="commentspanel_div">
                <div className="user_review" >
                    <h3> Fulanito de tal </h3>
                    <div className="star_grid">
                        <img className="star" src="/starfull.png" alt="star"/>
                        <img className="star" src="/starfull.png" alt="star"/>
                        <img className="star" src="/starfull.png" alt="star"/>
                        <img className="star" src="/starempty.png" alt="starempty"/>
                        <img className="star" src="/starempty.png" alt="starempty"/>
                    </div>
                    <div className="user_review_text">
                        <p>
                            Un poco corto, pero se deja leer,
                        </p>
                    </div>

                </div>

            </div>

        </div>
        <div className="leave_review_div">
            <form className="review form">
                <div className="review_star_grid">
                    <span  onClick="" > <img className="star" src="/starfull.png" alt="star"/> </span>
                    <span  onClick="" > <img className="star" src="/starfull.png" alt="star"/> </span>
                    <span  onClick="" > <img className="star" src="/starfull.png" alt="star"/> </span>
                    <span  onClick="" > <img className="star" src="/starfull.png" alt="star"/> </span>
                    <span  onClick="" > <img className="star" src="/starfull.png" alt="star"/> </span>
                </div>
                <textarea className="star_textarea" rows="5" cols="30">"Queremos saber tu opinion"</textarea>
                <button className="submit_review_button"> Dejar una review</button>
            </form>
        </div>


    </main>


       );
}