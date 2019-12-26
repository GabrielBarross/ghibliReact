import React from 'react';

const Cards = (props) => {
    console.log(props)
    return (
        <>
            <div className="cardBox">
                <h2 className="titleCards">{props.movieData.title}</h2>
                <p>{props.movieData.director}</p>
                <p className="descriptionCard">{props.movieData.description}</p>
                <a href={""} className="linkCards">Informações</a>
            </div>
        </>
    );
}

export default Cards;
