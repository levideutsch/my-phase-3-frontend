import React from "react";

function AllJokes({ joke, time }) {


    //Displays every individual joke on Home page
    return (
    <div className="card">
        <h3 className="card__title"></h3>
        <p className="card__content">{joke}</p>
        <div className="card__date">
            {time.slice(0, 10)}
        </div>
    </div>
    )
}
export default AllJokes