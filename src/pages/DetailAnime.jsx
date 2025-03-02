import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailAnime() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    fetchAnimeDetail();
  }, []);

  async function fetchAnimeDetail() {
    axios.get(`https://api.jikan.moe/v4/anime/${id}`).then((res) => {
      const animeData = res.data.data;

      if (animeData.mal_id === parseInt(id)) {
        setAnime(animeData);
      }
    });
  }

  if (!anime.mal_id) {
    return <h1 className="flex justify-center pt-[50vh] md:pt-[50vh] font-black">Anime Tidak Ditemukan Kembali Ke Home..  </h1>;
  }
  
  return (
    <div className="container mx-auto max-w-full">
      <NavBar />

      <header>

      </header>
    </div>
  );
}

export default DetailAnime;
