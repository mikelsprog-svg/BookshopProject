import {StarGrid} from "../Products/StarGrid.jsx";

export function Comment({comment, userName, rating, reviewTitle })
{

    return( <article className="review_card" >
        <div className="review_card_stars">
            <StarGrid GlobalRating={ rating} />
        </div>
        <h4 className="review_card_title">{reviewTitle}</h4>
        <p className="review_card_body">{comment}</p>
        <div className="review_card_meta">
            <span className="review_card_user">{userName}</span>
        </div>
    </article>)
}