import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const ComicsByPersonnage = () => {
  const { characterId } = useParams();
  const [comicList, setComicList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-api-back.herokuapp.com/comics/${characterId}`
        );

        setComicList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return (
    <div className="CharByPersonnage">
      {isLoading ? (
        <div>Page Loading ... </div>
      ) : (
        <div className="comicList-container">
          {comicList.comics.map((comic, index) => {
              return(
            <div className="comicList-card" key = {comic._id}>
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt="comic cover"
              />
              <p>{comic.title}</p>
              <p>{comic.description}</p>
            </div>)
          })}
        </div>
      )}
    </div>
  );
};
export default ComicsByPersonnage;