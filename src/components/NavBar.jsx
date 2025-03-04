import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return ( 
    // NavBar component goes here. It should include a logo, navigation links, and a search bar.const navigate = useNavigate();
    
    <div className="flex p-5 bg-transparent backdrop-blur-sm z-50 font-bold justify-between fixed right-0 left-0">
      <h1>React Anime</h1>

      <ul className="flex gap-4 cursor-pointer">
        <li>Home</li>
        <li>Popular</li>
        <li>Search</li>
      </ul>
    </div>
  );
}

export default NavBar;
