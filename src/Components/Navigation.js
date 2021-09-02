import React from 'react';
import { Link } from "react-router-dom";

class Navigation extends React.Component{
    render(){
     
        return(
            <header className="header">
                    <div className="container">
                    <img className="logo" src="film-icon.png"/>
                    <ul className="links">
                        <li >0
                            <Link to={'/top-rated'} >  top rated movies </Link>
                        </li>
                        <li>
                            <Link to={'/latest'} > latest movies </Link>
                        </li>
                        <li>
                            <Link to={'/upcoming'} > upcoming </Link>
                        </li>
                        <li>
                            <Link to={'/now-playing'} > now playing </Link>
                        </li>
                        <li>
                            <Link to={'/search'} > search </Link>
                        </li>
                        <li>
                            <Link to={'/favorites'} > Favorites </Link>
                        </li>
                    </ul>
                    <button className="btn logIn">
                        <Link to={'/login'}>Log In</Link>
                    </button>
                </div>
            </header>

        );
    }
}

export default Navigation;