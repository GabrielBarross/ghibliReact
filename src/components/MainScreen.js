import React, { useState, useEffect } from 'react';
import GhibliLogo from '../images/ghibliLogo.jpg'
import Cards from './Cards'
import Film from "./Film"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Main = () => {

    const [movieData, setMovieData] = useState([])
    useEffect(() => {
        var ghibliApi = "https://ghibliapi.herokuapp.com/films"
        fetch(ghibliApi)
            .then(data => data.json())
            .then(res => {
                var top = res.map((data) => ({ title: data.title, director: data.director, description: data.description, id: data.id }))
                setMovieData(top)
            })
    }, []);


    return (
        <>
            <Router>
                <header className="mainHeader">
                    <img src={GhibliLogo} className="logoImage" />
                    <h1 className="mainTitle">Ghibli Movies List</h1>
                    <ul>
                        <li>
                            <Link to="/">List</Link>
                        </li>
                        <li>
                            <Link to="/films">Film</Link>
                        </li>
                    </ul>
                </header>

                <Switch>
                    <Route exact path="/">
                        <section className="mainSection">
                            {
                                movieData.map((data, index) => {
                                    return <Cards movieData={data} key={index} />
                                })
                            }
                        </ section>
                    </Route>
                    <Route path="/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})/">
                        <Film />
                    </Route>

                </Switch>
            </Router>
        </>
    );
}

export default Main;
