import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import GradientText from "../components/GradientText";
import Squares from "../components/Squares";
import RecommendationsAnime from "../components/SwipeComponents/RecommendationsAnime";

function Home(props) {
  return (
    <div className="container mx-auto max-w-full">
      <NavBar />
      <div className="absolute -z-40 w-full h-96">
        <Squares direction="diagonal" speed={0.5} squareSize={80} />
      </div>

      {/* Header */}
      <header className="text-center flex justify-center items-center gap-6  py-40 flex-col px-2">
        <GradientText
          colors={["#c9def4", "#d397fa", "#8364e8", "#b8a4c9"]}
          animationSpeed={3}
          showBorder={false}
          className="text-4xl font-extrabold"
        >
          <h2>Watch Your Favorite Anime</h2>
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
      </header>

      {/* Recommendations Anime */}
      <section className="">
        <h2 className="pb-6 px-2 text-2xl font-black md:text-4xl">
          Recommendations
        </h2>
        <RecommendationsAnime />
      </section>
    </div>
  );
}

export default Home;
