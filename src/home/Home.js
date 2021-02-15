import React from "react";
import Banner from "../banner/Banner";
import Nav from "../nav/Nav";
import "./Home.css";
import requests from "../requests/requests";
import Row from "../row/Row";

const Home = () => {
  return (
    <div className="home">
      <Nav />

      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default Home;
