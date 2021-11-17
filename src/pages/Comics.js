import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-api-back.herokuapp.com/comics"
        );
        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="Comics">
      {isLoading ? (
        <div>Page loading ...</div>
      ) : (
        <div className="comic-container">
          {comics.map((comic, index) => {
            console.log(comic._id);
            return (
              <div className="comic-card" key={comic.id}>
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt="Marvel hero"
                />
                <p>{comic.name}</p>
                <p>{comic.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
