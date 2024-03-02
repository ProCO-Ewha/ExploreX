import * as React from "react";
import '/Users/eunseo-ko/ExploreX/frontend/src/App.css';
import university1 from "../../images/university1.jpg";
import university2 from "../../images/university2.jpg";
import university3 from "../../images/university3.jpg";
import university4 from "../../images/university4.jpg";


const Top4Univ = () => {


    return (
        <div className="top4univ">
            <h2 className="title">Top 4 Universities</h2>
            <p className="description">Check out the campuses of the top 4 universities.</p>
            <div className="univ-images">
                <img className="univ-image" src={university1} alt="University 1"/>
                <img className="univ-image" src={university2} alt="University 2"/>
                <img className="univ-image" src={university3} alt="University 3"/>
                <img className="univ-image" src={university4} alt="University 4"/>
            </div>
        </div>
    );
}

export default Top4Univ