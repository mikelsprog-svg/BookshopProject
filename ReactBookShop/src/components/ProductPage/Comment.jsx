import {StarGrid} from "../Products/StarGrid.jsx";

export function Comment({comment, userName,rating })
{

    return( <div className="user_review" >
        <h3> {userName}</h3>
        <StarGrid GlobalRating={ rating} />
        <div className="user_review_text">
            <p>
                {comment}
            </p>
        </div>
        <br/>
        <br/>
        <hr/>
    </div>)
}