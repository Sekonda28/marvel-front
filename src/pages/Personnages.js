import axios from "axios";
import { useEffect, useState } from "react";

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
        console.log(charData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [charData]);
  return (
    <div className="Personnages">
      {isLoading ? (
        <div>Page loading ...</div>
      ) : (
        <div>
          {" "}
          {charData.map((char, index) => {
            return (
              <div className="char-card">
                <p>ff</p>
                <p>fdfdf</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Personnages;
