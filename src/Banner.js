import React, { useEffect, useState } from "react";
import "./Banner.css";
import YouTube from "react-youtube";
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

  useEffect(() => {
    if (movie !== undefined) {
      movieTrailer(null, {
        tmdbId: movie.id,
        apiKey: process.env.REACT_APP_API_KEY,
        id: true,
      }).then((trailer) => {
        setTrailer(trailer);
      });
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
      <div className="banner__right">
        {playState && (
          <YouTube
            videoId={trailer}
            opts={videoOptions}
            containerClassName="banner__trailer"
            className="banner__iframe"
          />
        )}
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
