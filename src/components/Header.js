import logo from "../assets/images/marvel-logo.svg"

const Header = () => {
  return <div className = "header-container">
  <div>
      <img src={logo} alt="Marvel logo" className = "logo"/>
  </div>
  <span>Welcome to Marvelopedia !</span>
  <nav>
      <button className="button-characters">Characters</button>
      <button className ="button-comics">Comics</button>
      <button>Favourites</button>
  </nav>
  
</div>;
}

export default Header;