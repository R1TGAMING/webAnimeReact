import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    fetchRandomAnime();
  }, []);

  async function fetchRandomAnime() {
    await axios.get("https://api.jikan.moe/v4/random/anime").then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="container mx-auto max-w-full">
      <NavBar />

      <section className="text-center flex justify-center items-center gap-6  py-40 flex-col px-2">
        <h2 className="text-4xl font-extrabold ">Watch Your Favorite Anime</h2>
        <p className="italic">"No Anime No Life"</p>
        <div className="flex gap-6 font-bold">
          <button className="bg-white text-slate-900 hover:bg-transparent hover:text-white hover:outline px-5 py-2 items-center  text-center rounded-lg">
            Recomended
          </button>
          <button className="outline hover:bg-white hover:text-slate-900 hover:outline-none px-5 py-2 items-center  text-center rounded-lg">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
