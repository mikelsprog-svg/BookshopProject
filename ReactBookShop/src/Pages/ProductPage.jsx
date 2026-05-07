import Header from "../components/Header/Header.jsx";
import "./ProductPage.css"
import {useState} from "react";
import {useBooks} from "../customHooks/useBooks.js";
import {useComment} from "../customHooks/useComment.js";
import {BookInfoBig} from "../components/ProductPage/BookInfoBig.jsx";
import {Comment} from "../components/ProductPage/Comment.jsx";

export function ProductPage()
{

    const [bookId, setBookId] = useState(5);
    const {bookFromId, loading } = useBooks("",0,undefined,3);
    const {comments, loading: loadingComments } = useComment(bookId, -1);

    if(loading || loadingComments)
    {
        return (<></>)
    }
    return (


    <main className="ProductPage">
        <BookInfoBig book={bookFromId}/>
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

                {comments.length > 0 ? (
                    comments.map((item) => (
                        <Comment
                            key={item.Id}
                            review={item.Review}
                            rating={item.Rating}
                            user={item.User}
                        />
                    ))
                ) : (
                    <p>Este libro aún no tiene comentarios.</p>
                )}

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