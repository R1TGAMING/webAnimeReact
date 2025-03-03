import React, { useEffect, useState } from "react";
import axios from "axios";
import Swipe from "../Swipe";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

function RecommendationsAnime() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recommendationsAnime, setRecomendationsAnime] = useState([]);

  useEffect(() => {
    fetchRecommendationsAnime();
  }, []);

  function navigateAnime(id) {
    navigate(`anime/${id}`);
  }

  async function fetchRecommendationsAnime() {
    try {
      setLoading(true);
      await axios
        .get("https://api.jikan.moe/v4/recommendations/anime")
        .then((res) => {
          setRecomendationsAnime(res.data.data);
          setLoading(false);
          console.log(recommendationsAnime);
        });
    } catch (e) {
      console.error("Error fetching recommendations:", e);
      setLoading(false);
    }
  }

  return (
    <>
      <Swipe>
        {recommendationsAnime.map((res, index) => {
          return (
            <>
              <SwiperSlide key={index} className="cursor-pointer  ">
                <a href={res.entry[0].mal_id}>
                  {loading ? (
                    <>Loading..</>
                  ) : (
                    <img
                      src={res.entry[0].images.jpg.large_image_url}
                      className="rounded object-cover h-auto "
                      onClick={() => navigateAnime(res.entry[0].mal_id)}
                    />
                  )}
                </a>
              </SwiperSlide>
            </>
          );
        })}
      </Swipe>
    </>
  );
}
console.log("s")
export default RecommendationsAnime;
