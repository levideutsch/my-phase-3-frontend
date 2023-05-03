import React from "react";

function AllJokes({ joke }) {

    return (
       <div>
        <ul>
            <h3>
            {joke}
            </h3>
        </ul>
       </div>
    )
}
export default AllJokes