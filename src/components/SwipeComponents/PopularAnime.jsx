import React, { useEffect, useState } from "react";
import axios from "axios";
import Swipe from "../Swipe";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
function PopularAnime() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    fetchPopularAnime();
  }, []);

  function navigateAnime(id) {
    navigate(`anime/${id}`);
  }

  async function fetchPopularAnime() {
    try {
      setLoading(true);
      await axios.get("https://api.jikan.moe/v4/top/anime").then((res) => {
        setPopularAnime(res.data.data);
        setLoading(false);
        console.log(popularAnime);
      });
    } catch (e) {
      console.error("Error fetching recommendations:", e);
      setLoading(false);
    }
  }

  return (
    <Swipe>
      {popularAnime.map((res, index) => {
        return (
          <SwiperSlide key={res.mal_id} className="cursor-pointer p-2 ">
            {loading ? (
              <>Loading..</>
            ) : (
              <img
                src={res.images.jpg.large_image_url}
                className="rounded object-cover h-auto "
                onClick={() => navigateAnime(res.mal_id)}
              />
            )}
          </SwiperSlide>
        );
      })}
    </Swipe>
  );
}
export default PopularAnime;
