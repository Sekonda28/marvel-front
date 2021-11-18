import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Personnages = () => {
  const [charData, setCharData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-api-back.herokuapp.com/characters"
        );
        setCharData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="Personnages">
      {isLoading ? (
        <div>Page loading ...</div>
      ) : (
        <div className="char-container">
          {charData.map((char, index) => {
            return (
          char.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"&&
              <Link to={`/comics/${char._id}`} key={char._id}>
                
                <div className="char-card" key={char._id}>
                  <img
                    src={char.thumbnail.path + "." + char.thumbnail.extension}
                    alt="Marvel hero"
                  />
                  <div className="char-info">                  
                  <h2>{char.name}</h2>
                  <p>{char.description?char.description:"Character description coming soon..."}</p></div>

                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Personnages;
