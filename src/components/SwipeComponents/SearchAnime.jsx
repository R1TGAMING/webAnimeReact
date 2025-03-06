import React, { useState } from "react";
import axios from "axios";

function SearchAnime() {
  const [searchAnime, setSearchAnime] = useState([])

  async function searchAnime() {
    try {
      await axios.get('')
    } catch (err) {
      console.error(err);
    }
  }
  return <div>

  </div>;
}

export default SearchAnime;
