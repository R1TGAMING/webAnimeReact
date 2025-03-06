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
  faHourglassEnd,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Genres from "../components/Genres";
import Swipe from "../components/Swipe";
import RecommendationsAnime from "../components/SwipeComponents/RecommendationsAnime";

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

          <div className="flex flex-row flex-wrap gap-2 justify-start items-center">
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
        <h2 className="text-2xl font-black md:text-4xl pb-2 ">Synopsis</h2>
        <p className="text-[15px]  text-left md:text-left ">
          {isReadMore ? anime.synopsis.slice(0, 200) : anime.synopsis}
          <span
            onClick={toggleReadMore}
            className="cursor-pointer  text-slate-500"
          >
            {isReadMore ? "...read more" : " show less"}
          </span>
        </p>
      </section>

      <section className="md:px-20 px-2 pt-10 flex flex-col">
        <h2 className="text-2xl font-black md:text-4xl pb-5 text-left ">
          Trailer
        </h2>

        {anime.trailer.embed_url !== null ? (
          <iframe
            src={anime.trailer.embed_url}
            className=" rounded-lg justify-center w-full md:h-[100vh] sm:h-[50vh] h-full"
          ></iframe>
        ) : (
          <p className="justify-center text-center mx-auto font-black text-2xl p-20 ">This Anime Doesn`t Have Trailer :(</p>
        )}

        <div className="flex items-center gap-2 py-2 font-bold justify-center flex-wrap">
          <FontAwesomeIcon icon={faHourglassEnd} />
          <p>{anime.status}</p>
          <FontAwesomeIcon icon={faTelevision} />
          <p>{anime.type}</p>
          <p>Episodes : {anime.episodes}</p>
        </div>
      </section>

      <section className="md:px-20 px-2 pt-10">
        <h2 className="text-2xl font-black md:text-4xl pb-5 text-left ">
          Genres
        </h2>

        <div className="flex gap-2 flex-wrap">
          {anime.genres.map((res, index) => {
            return <Genres key={res.mal_id}>{res.name}</Genres>;
          })}
        </div>
      </section>

      <section className="md:px-20 px-2 pt-10">
      <h2 className="text-2xl font-black md:text-4xl pb-5 text-left ">
          Recommended
        </h2>
        <Swipe>
          <RecommendationsAnime />
        </Swipe>
      </section>
    </div>
  );
}

export default DetailAnime;
