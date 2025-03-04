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
            <SwiperSlide key={res.mal_id} className="cursor-pointer  p-2 ">
              <a href={res.entry[0].mal_id}>
                {loading ? (
                  <>Loading..</>
                ) : (
                  <>
                    <img
                      src={res.entry[0].images.jpg.large_image_url}
                      className="rounded object-cover"
                      onClick={() => navigateAnime(res.entry[0].mal_id)}
                      alt={res.entry[0].title}
                    />

                    <p className="absolute bottom-2 bg-black bg-opacity-50 opacity-0 hover:opacity-100 w-auto max-w-[16vh] md:max-w-[21vh]">{res.entry[0].title}</p>
                  </>
                )}
              </a>
            </SwiperSlide>
          );
        })}
      </Swipe>
    </>
  );
}

export default RecommendationsAnime;
