import Header from "../components/Header/Header.jsx";
import "./ProductPage.css"
import {useState} from "react";
import {useBooks} from "../customHooks/useBooks.js";
import {useComment} from "../customHooks/useComment.js";
import {BookInfoBig} from "../components/ProductPage/BookInfoBig.jsx";
import {Comment} from "../components/ProductPage/Comment.jsx";
import {useSearchParams} from "react-router-dom";
import {allItems} from "../data/books.js";
/*users.find((val) => val.Id === item.Id).name*/
export function ProductPage()
{
    const [searchParams] = useSearchParams();

    const bookId = searchParams.get("bookId");
    const {bookFromId, loading } = useBooks("",0,undefined,bookId);
    const {comments, loading: loadingComments } = useComment(parseInt(bookId), -1);

    if(loading || loadingComments)
    {
        return (<></>)
    }

    return (


    <main className="ProductPage">
        <BookInfoBig book={bookFromId}/>
        <div className="user_review_div" >
            <div className="value_panel">
                <h3> Nota media {bookFromId.GlobalRating} Estrellas</h3>
                <div className="number_stars">
                    <p>5 Estrellas : {comments.filter((item) => item.Rating === 5).length}</p>
                    <p>4 Estrellas : {comments.filter((item) => item.Rating === 4).length}</p>
                    <p>3 Estrellas : {comments.filter((item) => item.Rating === 3).length}</p>
                    <p>2 Estrellas : {comments.filter((item) => item.Rating === 2).length}</p>
                    <p>1 Estrella  : {comments.filter((item) => item.Rating === 1).length}</p>
                </div>
            </div>
            <div className="commentspanel_div">

                {comments.length > 0 ? (
                    comments.map((item) => (
                        <Comment
                            key={item.Id}
                            comment={item.Review}
                            rating={item.Rating}
                            userName={ item.Id}
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