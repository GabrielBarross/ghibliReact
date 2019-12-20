import React from 'react';

const Cards = (props) => {

    return (
        <>
            <div className="cardBox">
                <h2>{props.movieName}</h2>
            </div>
        </>
    );
}

export default Cards;
