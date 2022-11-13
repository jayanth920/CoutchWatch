import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"


const Header = () => {
    return(
        <div className="header">
            <div class="headerLeft">
                <Link to='/'><img className="header__icon" src="./CWlogo.jpeg" /></Link>
                <Link to='/movies/popular'>Popular</Link>
                <Link to='/movies/top_Rated'>Top Rated</Link>
                <Link to='/movies/upcoming'>Upcoming</Link>
            </div>
        </div>
    )
}


export default Header