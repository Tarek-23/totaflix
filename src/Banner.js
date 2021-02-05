import React, { useEffect, useState } from "react";
import "./Banner.css";
import "react-slidedown/lib/slidedown.css";
import YouTube from "react-youtube";
import { SlideDown } from "react-slidedown";

const movieTrailer = require("movie-trailer");

function Banner({ movie }) {
  const [trailer, setTrailer] = useState();
  const [playState, setPlayState] = useState(false);

  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      iv_load_policy: 3,
      controls: 1,
      modestbranding: 1,
    },
  };

  const togglePlayState = () => setPlayState((playState) => !playState);

  const fetchTVTrailer = async (id) => {
    let result = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
      `).then((response) => response.json());

    let trailer = await result.results;
    return trailer;
  };

  useEffect(() => {
    if (movie !== undefined) {
      if (movie.type === "movie") {
        movieTrailer(null, {
          tmdbId: movie.id,
          apiKey: process.env.REACT_APP_API_KEY,
          id: true,
        }).then((trailer) => {
          setTrailer(trailer);
        });
      } else {
        fetchTVTrailer(movie.id)
          .then((results) => results.find((item) => item.type === "Trailer"))
          .then((result) => setTrailer(result.key));
      }

      setPlayState(false);
    }
  }, [movie]);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      key={movie?.title}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>

        <button
          className={`banner__button ${
            trailer === null ? "banner__button--disabled" : ""
          }`}
          onClick={togglePlayState}
        >
          {playState ? "Hide" : "Play"}
        </button>
        <button className="banner__button">My List</button>

        <p className="banner__description">{movie?.overview}</p>
      </div>
      <SlideDown className="banner__right">
        {playState && (
          <YouTube
            videoId={trailer}
            opts={videoOptions}
            containerClassName="banner__trailer"
            className="banner__iframe"
          />
        )}
      </SlideDown>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
