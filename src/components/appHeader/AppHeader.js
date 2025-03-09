import { Component } from "react";

import "./appHeader.scss"
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function AppHeader () {
  return (
    <header className="app__header">
      <h1 className="app_title">
        <Link 
        exact 
        to="/"
        activeStyle={{color: "#9F0013"}}
        >
          <span>Marvel</span>information portal
        </Link>
      </h1>
      <nav className="app_menu">
        <ul>
          <li>
            <NavLink to="'/"Characters></NavLink>
          </li>
          /
          <li>
            <NavLink
            exact
            to="/comics/"
            activeStyle={{color: "#9F0013"}}
            >
            Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}