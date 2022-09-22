import React from "react";
import {Link} from "react-router-dom";

const Nav = function() {
    return(
        <div className="nav"> 
        <Link to="/">
        StockR
        </Link>
        <Link to="/about">
        About
        </Link>
        <Link to="/stocks">
        Stocks
        </Link>
        </div>
    )
}

export default Nav;