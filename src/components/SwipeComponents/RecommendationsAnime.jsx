import React, { useEffect, useState } from "react";
import axios from "axios";
import Swipe from "../Swipe";
import { Swiper, SwiperSlide } from "swiper/react";

function RecommendationsAnime() {
  const [recommendationsAnime, setRecomendationsAnime] = useState([]);

  useEffect(() => {
    fetchRecommendationsAnime();
  }, []);

  async function fetchRecommendationsAnime() {
    await axios
      .get("https://api.jikan.moe/v4/recommendations/anime")
      .then((res) => {
        setRecomendationsAnime(res.data.data);

        console.log(recommendationsAnime);
      });
  }

  return (
    <>
      <Swipe>
        {recommendationsAnime.map((res, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img
                src={res.entry[0].images.jpg.large_image_url}
                className="rounded object-cover w-64 h-64"
              />
              <p className="p-[5px] text-center">{res.entry[0].title}</p>
            </SwiperSlide>
          );
        })}
      </Swipe>
    </>
  );
}

export default RecommendationsAnime;
