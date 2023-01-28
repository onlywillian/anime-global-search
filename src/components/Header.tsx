const Header = () => {
    return ( 
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold w-full text-center h-1/9 py-6">Anime Global Search</h1>
        <input type="text" className="px-5 py-2 w-1/2 border border-gray-800 rounded" placeholder="Anime name"/>
      </div>
    );
}
 
export default Header;