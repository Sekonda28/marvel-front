import { useState, useEffect } from "react";

const Comic = ({ comic, setFavorisList, favorisList }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  localStorage.setItem("favourites", JSON.stringify(favorisList));

  useEffect(() => {
    for (let i = 0; i < favorisList.length; i++) {
      try {
        if (favorisList[i]._id === comic._id) {
          setLikeStatus(true);
          break;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [comic._id, favorisList]);

  const handleClick = (comic) => {
    if (likeStatus === false) {
      const newTab = [...favorisList];
      newTab.push(comic);
      setFavorisList(newTab);
    } else {
      for (let i = 0; i < favorisList.length; i++) {
        const newTab = [];
        if (favorisList[i]._id !== comic._id) {
          newTab.push(favorisList[i]);
        }
        setFavorisList(newTab);
      }
    }
    //
  };

  return (
    comic.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
      <div
        className="comic-card"
        key={comic._id}
        onClick={() => {
          handleClick(comic);
          setLikeStatus(!likeStatus);
        }}
      >
        <img
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt="Marvel hero"
        />
        <h2>{comic.title}</h2>
        <div className="fav-container">
          <span className="fav-para">
            {likeStatus ? "Remove from favourites" : "Add to favourites"}
          </span>

          <i
            className={likeStatus ? "fafas fas fa-heart" : "fafas far fa-heart"}
          ></i>
        </div>

        <p>
          {comic.description ? comic.description : "Description coming soon..."}
        </p>
      </div>
    )
  );
};

export default Comic;
