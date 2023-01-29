const Anime = ({img, title, desc, genres, score, episodes}: any) => {
    return ( 
        <div className="bg-gray-200 w-5/6 h-64 mt-10 flex relative">
            {/* Coisas dos cantos */}
            <div className="absolute bg-black text-white rounded w-20 -right-4 -top-4 text-xl text-center py-2">
                {episodes}
            </div>
            <div className="absolute bg-yellow-500 rounded w-20 -right-4 -bottom-4 text-white text-xl font-bold text-center py-2">
                {score}
            </div>

            {/* O conteúdo */}
            <img src={img} alt="Anime Cover" className="w-40"/>
            <div className="ml-8 mt-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="h-1/2 overflow-hidden text-ellipsis">{desc}</p>

                <div className=" w-full h-2/6 flex items-end">
                    {genres?.map((genre: any) => (
                        <span key={genre.mal_id} className="bg-black rounded text-white py-2 px-3 mr-3 cursor-pointer">
                            {genre.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Anime;