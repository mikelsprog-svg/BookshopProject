export function Comment({comment, userName, value})
{

    return( <div className="user_review" >
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
    </div>)
}