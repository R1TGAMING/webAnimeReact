import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Squares from "../components/Squares";
import SearchAnimeSlide from "../components/SwipeComponents/SearchAnimeSlide";
import NavBar from "../components/NavBar";

function SearchAnime() {
  const [queryParams] = useSearchParams();
  const query = queryParams.get("q");
  const [inputValue, setInputValue] = useState(query);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="container mx-auto max-w-full">
      <NavBar />

      <div className="absolute -z-40 w-full h-96 md:h-[100vh]">
        <Squares direction="diagonal" speed={0.5} squareSize={100} />
      </div>

      <header className=" flex items-center gap-2 font-black py-40  justify-center md:py-52 ">
        <input
          type="search"
          className="  bg-slate-900 outline outline-slate-800 text-white  md:w-72 sm:w-64  rounded p-2 "
          placeholder="Search.."
          value={inputValue}
          onChange={handleInput}
        ></input>

        <Link to={`/anime/search?q=${inputValue}`}>Search</Link>
      </header>

      <section className="flex flex-col gap-2 justify-center">
        <h2 className="font-black text-4xl text-center ">Results</h2>
        <SearchAnimeSlide query={query} searchButton={query} />
      </section>
    </div>
  );
}

export default SearchAnime;
