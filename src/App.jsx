import { useEffect, useState } from 'react';

import Header from "./Header";
import AnimeList from './components/AnimesList';
import Footer from './Footer';

function App() {
  const [list, setList] = useState(false);

  useEffect(() => {
      fetch("https://api.jikan.moe/v4/anime")
        .then(response => response.json())
        .then(data => setList(data));
  }, []);


  const handleAnimeQuery = (e) => {
    console.log(e);
    let query = e.target.value;

    if (e.key == 'Enter' && e.target.value.length > 0) {
      fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        .then(response => response.json())
        .then(data => setList(data));
    }
  }


  return (
    <>
      <Header handleAnimeQuery={handleAnimeQuery}/>
      <AnimeList list={list}/>
      <Footer />
    </>
  )
}

export default App;