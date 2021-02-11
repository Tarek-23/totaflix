import React, { useEffect, useState } from "react";
import "./Banner.css";
import "react-slidedown/lib/slidedown.css";
import YouTube from "react-youtube";
import { SlideDown } from "react-slidedown";

const movieTrailer = require("movie-trailer");

function Banner({ movie: media }) {
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
    if (media !== undefined) {
      if (media.type === "movie") {
        movieTrailer(null, {
          tmdbId: media.id,
          apiKey: process.env.REACT_APP_API_KEY,
          id: true,
        }).then((trailer) => {
          setTrailer(trailer);
        });
      } else {
        fetchTVTrailer(media.id)
          .then((results) => results.find((item) => item.type === "Trailer"))
          .then((result) => setTrailer(result.key))
          .catch(() => setTrailer(null));
      }

      setPlayState(false);
    }
  }, [media]);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${media?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      key={media?.title}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {media?.title || media?.name || media?.original_title}
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

        <p className="banner__description">{media?.overview}</p>
      </div>
      <SlideDown className="banner__right">
        {playState && (
          <YouTube
            videoId={trailer}
            opts={videoOptions}
            containerClassName="banner__trailer"
            className="banner__iframe"
            onEnd={togglePlayState}
          />
        )}
      </SlideDown>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
