import React from 'react';
import GhibliLogo from "../images/ghibliLogo.jpg"

const Header = () => {
    return (
        <>
            <header className="mainHeader">
                <img src={GhibliLogo} className="logoImage" />
                <h1 className="mainTitle">Ghibli Movies List</h1>
            </header>
        </>
    );
}

export default Header;
