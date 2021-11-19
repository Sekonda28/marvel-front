import { useState } from "react";


const Comic = ({comics, setFavorisList, favorisList}) => {

    const [likeStatus, setLikeStatus] = useState("far fa-heart");

    const handleClick = (id) => {
        likeStatus === "far fa-heart"
          ? setLikeStatus("fas fa-heart")
          : setLikeStatus("far fa-heart");
        const newTab = [...favorisList];
        newTab.push(id);
        setFavorisList(newTab);
        localStorage.setItem("favourites", JSON.stringify(newTab));
      };



  return(
                <div className="comic-container">
            {comics.map((comic, index) => {
              return (
                comic.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                  <div className="comic-card" key={comic._id}>
                    <img
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt="Marvel hero"
                    />
                    <p>{comic.name}</p>
                    <p
                      className="favourite-line"
                      onClick={() => {
                        handleClick(comic._id);
                      }}
                    >
                      Add to favourites
                      <span className="fafas">
                        <i className={likeStatus}></i>
                      </span>
                    </p>
                    <p>
                      {comic.description
                        ? comic.description
                        : "Description coming soon..."}
                    </p>
                  </div>
                )
              );
            })}
          </div>)
}

export default Comic;