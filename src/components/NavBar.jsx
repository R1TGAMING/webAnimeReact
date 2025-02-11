import React from "react";

function NavBar() {
  return (
    <div className="flex p-5 font-bold justify-between fixed right-0 left-0">
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
