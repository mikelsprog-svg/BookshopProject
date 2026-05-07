

export function  StarGrid({GlobalRating})
{
    return ( <div className="star_grid">
        {[...Array(5)].map((_, i) => (
            <img
                key={i}
                className="star"
                src={i < GlobalRating ? "/starfull.png" : "/starempty.png"}
                alt="star"
            />
        ))}


    </div>)

}