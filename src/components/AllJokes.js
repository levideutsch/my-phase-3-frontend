import React from "react";

function AllJokes({ joke, time }) {

    // let newTime = time.slice(0, 10)
    // console.log(newTime)

    //Displays every individual joke on Home page
    return (
    //    <div className="all-jokes">
    //     <ul>
    //         <h3>
    //         {joke}
    //         {time.slice(0, 10)}
    //         </h3>
    //     </ul>
    //    </div>
    <div class="card">
    <h3 class="card__title">
    </h3>
    <p class="card__content">{joke}</p>
    <div class="card__date">
        {time.slice(0, 10)}
    </div>
</div>
    )
}
export default AllJokes