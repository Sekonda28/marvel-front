import logo from "../assets/images/marvel-logo.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div>
        <img
          src={logo}
          alt="Marvel logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <span>Welcome to Marvelopedia !</span>
      <nav>
        <button className="button-characters" onClick={() => navigate("/")}>
          Characters
        </button>
        <button className="button-comics" onClick={() => navigate("/comics")}>
          Comics
        </button>
        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </nav>
    </div>
  );
};

export default Header;
