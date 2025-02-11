import React from "react";
import NavBar from "../components/NavBar";
import Jikan from 'jikan4.js'

const client = new Jikan.Client()

function Home(props) {
  return (
    <div className="container mx-auto max-w-4xl w-full">
      <NavBar />

      <section>
        <img src="" alt="" className="object-cover h-[90vh]" />
      </section>
    </div>
  );
}

export default Home;
