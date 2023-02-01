import Header from "./components/Header";
import AnimeContainer from "./components/AnimeContainer";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebouce";

function App() {
  const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
      function fetchData() {
        fetch("https://api.jikan.moe/v4/anime")
            .then(response => response.json())
            .then(data => setAnimeList(data.data))
        }
        fetchData()
    }, [])
    console.log(animeList);

    const handleInput = useDebounce((e: any) => {
      function fetchData(query: string) {
        fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
            .then(response => response.json())
            .then(data => setAnimeList(data.data))
        }
        fetchData(e.target.value)
    }, 500)
        
  return (
    <div className="App h-screen">
      <Header handleInput={handleInput}/>
      <AnimeContainer animeList={animeList}/>
    </div> 
  )
}

export default App
