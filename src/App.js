import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <h1 className="test"> Hello and welcome to totaflix</h1>
      {/* {req.map(() => (
        <Row title={requests.key} fetchUrl={requests[requests.key]} />
      ))} */}
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Top Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
