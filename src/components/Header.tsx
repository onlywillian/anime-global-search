const Header = ({ handleInput }: any) => {
    return ( 
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold w-full text-center h-1/9 py-6">Anime Global Search</h1>
        <input
          className="px-5 py-2 w-1/2 border border-gray-800 rounded" 
          type="text"
          placeholder="Anime name" 
          onChange={handleInput}/>
      </div>
    );
}
 
export default Header;