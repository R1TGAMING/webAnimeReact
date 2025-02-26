import React, { useEffect, useState } from "react";
import axios from "axios";
import Swipe from "../Swipe";
import { Swiper, SwiperSlide } from "swiper/react";
function PopularAnime() {
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    fetchPopularAnime();
  }, []);

  async function fetchPopularAnime() {
    await axios.get("https://api.jikan.moe/v4/top/anime").then((res) => {
        setPopularAnime(res.data.data);

      console.log(popularAnime);
    });
  }

  return (
    <Swipe>
      {popularAnime.map((res, index) => {
        return (
          <>
            <SwiperSlide key={index} className="cursor-pointer  ">
              <img
                src={res.images.jpg.large_image_url}
                className="rounded object-cover h-auto "
              />
            </SwiperSlide>
          </>
        );
      })}
    </Swipe>
  );
}

export default PopularAnime;
