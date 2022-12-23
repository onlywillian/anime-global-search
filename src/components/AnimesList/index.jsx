import { AnimeListContainer, AnimeInfo, Cat } from './styles';

import Block from '../Block';

const AnimeList = ({ list }) => {
    return ( 
        <AnimeListContainer>
            {list.data?.map(anime => (
                <AnimeInfo key={anime.mal_id}>
                    <img src={anime.images.jpg.image_url} alt="Anime Cover" />

                    <Block>{anime.episodes}</Block>
                    <Block type>{anime.score}</Block>

                    <div className='wrapper'>
                        <h2>
                            <a href={anime.url} target="_blank">{anime.title}</a>
                        </h2>
                        <p>{anime.synopsis}</p>
                        
                        <div className='cats-container'>
                            {anime.genres.map(cat => 
                                <Cat key={cat.name}>{cat.name}</Cat>
                            )}
                        </div>
                    </div>
                </AnimeInfo>
            ))}
        </AnimeListContainer>
     );
}
 
export default AnimeList;