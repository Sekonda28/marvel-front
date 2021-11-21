import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Comic from "../components/Comic";

const ComicsByPersonnage = ({
  liked,
  setLiked,
  favorisList,
  setFavorisList,
}) => {
  const { characterId } = useParams();
  const [comicList, setComicList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation()
  const {charPic, charName, charDesc} = location.state

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
        <div className="isLoading">Page Loading ... </div>
      ) : (
        <>
          <div className="char-banner">
          <div className = "char-comic-container">
          <div className = "char-comic-image">
            <img src={charPic} alt="marvel hero" /></div>
            <div className = "char-comic-txt">
              <h1>{charName}</h1>
              <p>{charDesc}</p>
            </div>
          </div></div>
          <div className="comic-container">
            {comicList.comics.map((comic, index) => {
              return (
                <Comic
                key = {index}
                  comic={comic}
                  favorisList={favorisList}
                  setFavorisList={setFavorisList}
                  setLiked={setLiked}
                  liked={liked}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default ComicsByPersonnage;
