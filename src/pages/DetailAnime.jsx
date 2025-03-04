import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Squares from "../components/Squares";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faRankingStar,
  faBookmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DetailAnime() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    fetchAnimeDetail();
  }, []);

  function toggleReadMore() {
    setIsReadMore(!isReadMore);
  }

  async function fetchAnimeDetail() {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`).then((res) => {
      const animeData = res.data.data;

      if (animeData.mal_id === parseInt(id)) {
        setAnime(animeData);
      }
    });
  }

  if (!anime.mal_id) {
    return (
      <h1 className="flex justify-center pt-[50vh] md:pt-[50vh] font-black">
        Loading...
      </h1>
    );
  }

  return (
    <div className="container mx-auto max-w-full ">
      <NavBar />

      <div className="absolute -z-40 w-full h-96 md:h-[100vh]">
        <Squares direction="diagonal" speed={0.5} squareSize={100} />
      </div>

      <header className="flex p-2 flex-col md:flex-row md:text-left md:items-center md:justify-start md:px-20 md:pt-52 text-center items-center gap-6 justify-center pt-40">
        <Zoom className="">
          <img
            src={anime.images.jpg.large_image_url}
            className="w-40 rounded outline outline-slate-700"
          />
        </Zoom>

        <div className="">
          <h1 className="text-2xl md:text-4xl font-black pb-4">
            {anime.title}
          </h1>

          <hr className="p-2"></hr>

          <div className="flex flex-row gap-2 justify-start items-center">
            <FontAwesomeIcon icon={faClock} />
            <p>{anime.duration}</p>
            <FontAwesomeIcon icon={faStar} />
            <p>{anime.score}</p>
            <FontAwesomeIcon icon={faRankingStar} />
            <p>{anime.popularity}</p>
            <FontAwesomeIcon icon={faBookmark} />
            <p>{anime.favorites}</p>
          </div>
        </div>
      </header>

      <section className="md:px-20 px-2 pt-10">
      <p className="text-[15px]  text-center md:text-left">
        {isReadMore ? anime.synopsis.slice(0, 200) : anime.synopsis}
        <span
          onClick={toggleReadMore}
          className="cursor-pointer text-slate-500"
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      </section>
      
    </div>
  );
}

export default DetailAnime;
