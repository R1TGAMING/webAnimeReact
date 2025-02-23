import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import GradientText from "../components/GradientText";
import Squares from "../components/Squares";
import Swipe from "../components/Swipe";

function Home(props) {
  const [popularAnime, setPopularAnime] = useState();

  useEffect(() => {
    fetchPopularAnime();
  }, []);

  async function fetchPopularAnime() {
    await axios
      .get("https://api.jikan.moe/v4/recommendations/anime")
      .then((res) => {
        setPopularAnime(res.data.data[0]);

        console.log(popularAnime);
      });
  }

  return (
    <div className="container mx-auto max-w-full">
      <NavBar />
      <Squares direction="diagonal" speed={0.5} />
      {/* Header */}
      <section className="text-center flex justify-center items-center gap-6  py-40 flex-col px-2">
        <GradientText
          colors={["#c9def4", "#d397fa", "#8364e8", "#b8a4c9"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl font-extrabold"
        >
          Watch Your Favorite Anime
        </GradientText>
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
