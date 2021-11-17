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
            console.log(char._id)
            return (
              <Link to={`/comics/${char._id}`} key={char._id}>
                
                <div className="char-card" key={char.id}>
                  <img
                    src={char.thumbnail.path + "." + char.thumbnail.extension}
                    alt="Marvel hero"
                  />
                  <p>{char.name}</p>
                  <p>{char.description}</p>
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
