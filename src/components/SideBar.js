import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const SideBar = () => {
    const isToggle = useSelector(store => store.app.isMenuOpen)
    
    //early return
    if (!isToggle) return null;

    return (
    <div className="w-48 shadow-lg p-5">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Explore</li>
        <li>shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Movies</li>
        <li>Videos</li>
        <li>Trends</li>
        <li>History</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Movies</li>
        <li>Videos</li>
        <li>Trends</li>
        <li>History</li>
      </ul>
    </div>
  );
};

export default SideBar;
