import React from "react";
import "./Banner.css";

function Banner({ movie }) {
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
      <div className="banner__head"></div>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>

        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>

        <p className="banner__description">{movie?.overview}</p>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
