import React, { useState } from "react";
import MovieCard from "./MovieCard";
import ReactStars from "react-rating-stars-component";
import AddModal from "./AddModal";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";
import movie5 from "../images/movie5.jpg";
function MovieListe() {
  const [Liste, setListe] = useState([
    {
      name: "HASHTAG",
      image : "https://upload.wikimedia.org/wikipedia/en/8/87/Horror_Tara_Subkoff_Movie_Poster.png",
      rating: 4,
      year: 2021,
      overview:
        "Tinja is a 12-year-old gymnast who's desperate to please her image-obsessed mother. After finding a wounded bird in the woods, she brings its strange egg home, nestles it in her bed and nurtures it until it hatches. The creature that emerges soon becomes her closest friend and a living nightmare, plunging Tinja into a twisted reality that her mom refuses to see.",

      url: "https://www.youtube.com/watch?v=HJg4C_5H0Dg",
    },
    {
      name: "INFINITE",
      image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/74a16e2671fac0c7ed8c1fb89f54ad116ef8d968ac0d1cd95baa6f67d05165ab._RI_V_TTW_.jpg",
      rating: 3,
      year: 2021,
      overview:
        "Evan can remember things from the past and holds the key to the location of a device that can destroy the world. As a result, he is chased by groups that have their own agenda for the device.",

      url: "https://www.youtube.com/watch?v=_WWEOCQGxSw",
    },
    {
      name: "OLD",
      image : "https://upload.wikimedia.org/wikipedia/en/d/de/Old_film_poster.jpg",
      rating: 5,
      year: 2021,
      overview:
        "A thriller about a family on a tropical holiday who discover that the secluded beach where they are relaxing for a few hours is somehow causing them to age rapidly reducing their entire lives into a single day.",

      url: "https://www.youtube.com/watch?v=A4U2pMRV9_k",
    },

    {
      name: "MORBIUS",
      image: "https://media.titanbooks.com/catalog/products/Morbius.jpg",
      rating: 1,
      year: 2021,
      overview:
        "Biochemist Michael Morbius tries to cure himself of a rare blood disease, but when his experiment goes wrong, he inadvertently infects himself with a form of vampirism instead.",

      url: "https://www.youtube.com/watch?v=oZ6iiRrz1SY",
    },

    {
      name: "MOONFALL",
      image:
        "https://fr.web.img3.acsta.net/pictures/22/01/06/17/08/1230710.jpg",
      rating: 5,
      year: 2021,
      overview:
        "The world stands on the brink of annihilation when a mysterious force knocks the moon from its orbit and sends it hurtling toward a collision course with Earth. With only weeks before impact, NASA executive Jocinda 'jo' Fowler teams up with a man from her past and a conspiracy theorist for an impossible mission into space to save humanity.",
      url: "https://www.youtube.com/watch?v=ivIwdQBlS10",
    },
  ]);

  const [text, settext] = useState("");
  const [rate, setrate] = useState(1);
  const rateChanged = (newrate) => {
    setrate(newrate);
  };

  const addMovie = (newfilm) => {
    setListe([...Liste, newfilm]);
  };
  return (
    <div className="all">
      <div className="filter">
        <div className="titlee">
          {" "}
          <h1>Movie App</h1>{" "}
        </div>

        <div className="nav2">
          <div class="form-outline" className="inputt">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Quick Search"
              aria-label="Search"
              onChange={(e) => settext(e.target.value)}
            />
          </div>

          <div className="stars">
            <ReactStars
              count={5}
              onChange={rateChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <AddModal addMovie={addMovie} />
        </div>
      </div>

      <div className="liste">
        {Liste.filter(
          (el) =>
            el.name.toLowerCase().includes(text.toLowerCase()) &&
            el.rating >= rate
        ).map((el) => (
          <MovieCard movie={el} />
        ))}
      </div>
    </div>
  );
}

export default MovieListe;
