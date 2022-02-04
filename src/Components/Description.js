import React from "react";
import { useLocation } from "react-router-dom";
import MovieListe from "./MovieListe";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Description() {
  const location = useLocation();
  const { movie } = location.state;

  return (
    <div>
      <Navigation />

      <div className="container">
        <img src={movie.image} className="movieimage1" />
        <div className="containertext">
          <h1
            style={{ color: "white", marginTop: "100px" }}
            className="titledescription"
          >
            {" "}
            {movie.name}{" "}
          </h1>
          <p style={{ color: "white", marginTop: "50px" }} className="parag">
            {" "}
            {movie.overview}{" "}
          </p>
          <a href={movie.url} target="_blank">
            <button class="fun1">Watch Trailer</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Description;
