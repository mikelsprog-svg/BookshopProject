import Header from "../components/Header/Header.jsx";
import "./ProductPage.css"
import {useBooks} from "../customHooks/useBooks.js";
import {useComment} from "../customHooks/useComment.js";
import {BookInfoBig} from "../components/ProductPage/BookInfoBig.jsx";
import {Comment} from "../components/ProductPage/Comment.jsx";
import {useSearchParams} from "react-router-dom";
import users from "../data/users.json";
/*users.find((val) => val.Id === item.Id).name*/
export function ProductPage()
{
    const [searchParams] = useSearchParams();

    const bookId = searchParams.get("bookId");
    const {bookFromId, loading } = useBooks("",0,undefined,bookId);
    const {comments, loading: loadingComments } = useComment(parseInt(bookId), -1);

    const ratingLevels = [5, 4, 3, 2, 1];
    const totalComments = comments.length;
    const averageRating = totalComments
        ? comments.reduce((sum, item) => sum + item.Rating, 0) / totalComments
        : 0;
    const displayRating = averageRating.toFixed(1).replace('.', ',');
    const ratingsSummary = ratingLevels.map((rating) => {
        const count = comments.filter((item) => item.Rating === rating).length;
        const percentage = totalComments ? (count / totalComments) * 100 : 0;

        return { rating, count, percentage };
    });

    const commentsWithUsers = comments.map((item) => ({
        ...item,
        userName: users.find((user) => user.Id === item.User)?.name ?? `Usuario ${item.User}`,
    }));

    if(loading || loadingComments)
    {
        return (<></>)
    }

    return (


    <main className="ProductPage">
        <BookInfoBig book={bookFromId}/>
        <div className="reviews_section">
            <aside className="value_panel">
                <h3 className="value_panel_rating">{displayRating}</h3>
                <div className="value_panel_stars">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="value_panel_star">☆</span>
                    ))}
                </div>

                <div className="number_stars">
                    {ratingsSummary.map(({ rating, count, percentage }) => (
                        <div key={rating} className="rating_row">
                            <span className="rating_label">{rating} estrellas</span>
                            <div className="rating_bar">
                                <span
                                    className="rating_bar_fill"
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                            <span className="rating_percent">{percentage.toFixed(1)} %</span>
                        </div>
                    ))}
                </div>

                <div className="value_panel_cta">
                    <p className="value_panel_prompt">¿Has leído este libro?</p>
                    <p className="value_panel_helper">Valoralo y comparte tu opinión con otros usuarios</p>
                </div>
            </aside>

            <section className="commentspanel_div">
                <h3 className="comments_heading">Opiniones</h3>

                <div className="comments_list">
                    {commentsWithUsers.length > 0 ? (
                        commentsWithUsers.map((item) => (
                            <Comment
                                key={item.Id}
                                comment={item.Review}
                                rating={item.Rating}
                                userName={item.userName}
                                reviewTitle={`Valoración ${item.Rating}/5`}
                            />
                        ))
                    ) : (
                        <p className="comments_empty">Este libro aún no tiene comentarios.</p>
                    )}

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
                            <button className="submit_review_button" type="button" disabled>
                                Dejar una review
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </main>


       );
}