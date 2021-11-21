import { useState } from "react";

const Comic = ({ comic, setFavorisList, favorisList, liked, setLiked }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  localStorage.setItem("favourites", JSON.stringify(favorisList));
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
      <div className="comic-card" key={comic._id}>
        <img
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt="Marvel hero"
        />
        <h2>{comic.title}</h2>
        <p
          className="favourite-line"
          onClick={() => {
            handleClick(comic);
            setLikeStatus(!likeStatus);
          }}
        >
          {likeStatus ? "In your favourites" : "Add to favourites"}
          <span className="fafas">
            <i className={likeStatus ? "fas fa-heart" : "far fa-heart"}></i>
          </span>
        </p>
        <p>
          {comic.description ? comic.description : "Description coming soon..."}
        </p>
      </div>
    )
  );
};

export default Comic;
