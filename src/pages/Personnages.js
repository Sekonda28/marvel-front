import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Personnages = () => {
  const [charData, setCharData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search === "") {
          const response = await axios.get(
            "https://marvel-api-back.herokuapp.com/characters"
          );
          setCharData(response.data);
          setIsLoading(false);
        } else {
          const response = await axios.get(
            `https://marvel-api-back.herokuapp.com/characters?name=${search}`
          );
          setCharData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search]);
  return (
    <div className="Personnages">
      {isLoading ? (
        <div className="isLoading">Page loading ...</div>
      ) : (
        <div>
          <div className="heros">
            
          </div>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search by character"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="char-container">
            {charData.map((char, index) => {
              return (
                char.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                    <Link to={`./comics/${char._id}`} key={char._id} state = {{
                      charPic: char.thumbnail.path+"."+char.thumbnail.extension,
                      charName: char.name,
                      charDesc: char.description
                    }} >
                    <div className="char-card" >
                      <img
                        src={
                          char.thumbnail.path + "." + char.thumbnail.extension
                        }
                        alt="Marvel hero"
                      />
                      <div className="char-info">
                        <h2>{char.name}</h2>
                        <p>
                          {char.description
                            ? char.description
                            : "Character description coming soon..."}
                        </p>
                      </div>
                    </div></Link>

      
                )
              );
            })}
          </div>
          </div>
      )}
    </div>
  );
};

export default Personnages;
