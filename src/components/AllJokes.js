import React from "react";

function AllJokes({ joke, time }) {

    //Displays every individual joke on Home page
    return (
       <div className="all-jokes">
        <ul>
            <h3>
            {joke}
        
            </h3>
        </ul>
       </div>
    )
}
export default AllJokes