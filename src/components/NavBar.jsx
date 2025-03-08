import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [searchField, setSearchField] = useState(false);
  const [inputValue, setInputValue] = useState("");


  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function navigateHome() {
    navigate(`/`);
  }

  return (
    // NavBar component goes here. It should include a logo, navigation links, and a search bar.const navigate = useNavigate();

    <div className="flex p-5 bg-transparent backdrop-blur-sm z-50 font-bold justify-between fixed right-0 left-0">
      <h1 onClick={() => navigateHome()} className="cursor-pointer">
        React Anime
      </h1>

      <ul className="flex gap-4 cursor-pointer items-center">
        <li className="flex gap-2 items-center">
          <input
            type="search"
            className="  bg-slate-900 outline outline-slate-800 text-white w-20 md:w-52 sm:w-52  rounded p-2  "
            placeholder="Search.."
            value={inputValue}
            onChange={handleInput}
          ></input>

          <Link to={`/anime/search?q=${inputValue}`}>Search</Link>
        </li>
        <li onClick={() => navigateHome()}>Home</li>
      </ul>
    </div>
  );
}

export default NavBar;
