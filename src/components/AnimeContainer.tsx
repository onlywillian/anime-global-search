import { useEffect, useState } from "react";
import Anime from "./Anime";

const AnimeContainer = () => {

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

    return ( 
        <div className="w-full flex flex-col items-center min-h-full">
            {animeList?.map((anime: any) => (
                <Anime 
                    key={anime?.mal_id} 
                    img={anime.images.jpg.image_url} 
                    title={anime.title} 
                    desc={anime.synopsis}
                    genres={anime.genres}
                    episodes={anime.episodes}
                    score={anime.score}
                />
            ))}
        </div>
     );
}
 
export default AnimeContainer;