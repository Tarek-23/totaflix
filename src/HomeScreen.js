import React, { useState } from "react";
import requests from "./requests";
import Row from "./Row";
import Header from "./Header";
import Banner from "./Banner";

function HomeScreen() {
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <div className="app">
      <Header />
      <Banner movie={selectedMovie} />
      {/* {req.map(() => (
        <Row title={requests.key} fetchUrl={requests[requests.key]} />
      ))} */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Top Action"
        fetchUrl={requests.fetchActionMovies}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Top Comedy"
        fetchUrl={requests.fetchComedyMovies}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Top Romance"
        fetchUrl={requests.fetchRomanceMovies}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Top Horror"
        fetchUrl={requests.fetchHorrorMovies}
        setMovie={setSelectedMovie}
      />
      <Row
        title="Top Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        setMovie={setSelectedMovie}
      />
    </div>
  );
}

export default HomeScreen;
