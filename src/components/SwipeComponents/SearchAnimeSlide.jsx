import React, { useEffect, useState } from "react";
import Swipe from "../Swipe";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function SearchAnimeSlide(props) {
  const { query, searchButton } = props;
  const [loading, setLoading] = useState(false);
  const [searchAnime, setSearchAnime] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSearchAnime();
  }, [searchButton]);

  function navigateAnime(id) {
    navigate(`/anime/${id}`);
  }

  async function getSearchAnime() {
    setLoading(true);
    try {
      await axios
        .get("https://api.jikan.moe/v4/anime?q=" + query)
        .then((res) => {
          setLoading(false);
          setSearchAnime(res.data.data);
        });
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  return (
    <Swipe>
      {searchAnime.map((res, index) => {
        return (
          <SwiperSlide key={res.mal_id} className="cursor-pointer  p-2 ">
            {loading ? (
              <>Loading..</>
            ) : (
              <>
                <img
                  src={res.images.jpg.large_image_url}
                  className="rounded h-[8rem] md:h-[20rem] sm:h-[12rem] w-auto "
                  onClick={() => navigateAnime(res.mal_id)}
                />
                <p>{res.title}</p>
              </>
            )}
          </SwiperSlide>
        );
      })}
    </Swipe>
  );
}

export default SearchAnimeSlide;
