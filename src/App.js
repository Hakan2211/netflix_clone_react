import React from 'react'
import './App.css';
import Row from './components/Rows/Row'
import requests from './requests'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
  );
}

export default App;

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a4927b9e29a79e1867b164a99ae866b9&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a4927b9e29a79e1867b164a99ae866b9&query="'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

