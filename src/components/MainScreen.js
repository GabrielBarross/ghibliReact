import React, { useState } from 'react';
import Header from './Header';
import Cards from './Cards'

const Main = () => {

    var ghibliApi = "https://ghibliapi.herokuapp.com/films"
    fetch(ghibliApi)
        .then(data => data.json())
        // .then(test => test[0])
        // .then(titles => titles.title)
        .then(function (response) {
            const mainName = response.title;
            response.forEach(mainName)
            return mainName
        })
        .then(res => console.log(res))
    // .then(res => console.log(res))
    // .then(test => test.indexOf(0))
    // .then(res => console.log(res))

    return (
        <>
            <Header />
            <section className="mainSection">
                <Cards />
            </ section>
        </>
    );
}

export default Main;
