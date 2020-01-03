import React from 'react';


const Film = () => {

    var pattern = /([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})/
    var guid = pattern.exec(window.location.href);
    if (guid) {
        let movieGuid = guid[0];
        console.log(movieGuid)
    }

    return (
        <>
            <section className="entireSection">
                <h1 className="entireName">
                    Movie Name Here
                </h1>
                <p className="entireDescription">

                </p>
            </section>
        </>
    );
}

export default Film;
