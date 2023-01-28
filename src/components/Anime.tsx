const Anime = ({img, title}: any) => {
    return ( 
        <div className="bg-gray-200 w-5/6 h-64 mt-10 flex">
            <img src={img} alt="Anime Cover" className="w-40"/>
            <div className="ml-8 mt-4">
                <h3 className="text-2xl font-medium">{title}</h3>
            </div>
        </div>
     );
}
 
export default Anime;