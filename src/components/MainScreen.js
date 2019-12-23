import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cards from './Cards'

const Main = () => {

    const [movieData, setMovieData] = useState([])
    useEffect(() => {
        var ghibliApi = "https://ghibliapi.herokuapp.com/films"
        fetch(ghibliApi)
            .then(data => data.json())
            .then(res => {
                var top = res.map((data) => ({ title: data.title, director: data.director }))
                setMovieData(top)
            })
    }, []);


    return (
        <>
            <Header />
            <section className="mainSection">
                {
                    movieData.map((data, index) => {
                        return <Cards movieData={data} key={index} />
                    })
                }
            </ section>
        </>
    );
}

export default Main;
