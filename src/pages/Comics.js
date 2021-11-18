import { useEffect, useState } from "react";
import axios from "axios";

const Comics = ({ favorisList, setFavorisList }) => {
  const [comics, setComics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  // const [likeStatus, setLikeStatus] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search === "") {
          const response = await axios.get(
            "https://marvel-api-back.herokuapp.com/comics"
          );
          setComics(response.data);


          setIsLoading(false);


        } else {
          const response = await axios.get(
            `https://marvel-api-back.herokuapp.com/comics?${search}`
          );
          setComics(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, favorisList]);

  const handleClick = (id) => {
    const newTab = [...favorisList];
    newTab.push(id);
    setFavorisList(newTab);
    localStorage.setItem("favourites", JSON.stringify(newTab))

  };

  return (
    <div className="Comics">
      {isLoading ? (
        <div className="isLoading">Page loading ...</div>
      ) : (
        <>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search by comic title"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
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
                      onClick={()=>{handleClick(comic._id)}}
                    >
                      Add to favourites{" "}
                      {/* <span className="fafas">
                        {" "}
                        {likeStatus ? (
                          <i className="fas fa-heart"></i>
                        ) : (
                          <i className="far fa-heart"></i>
                        )}
                      </span> */}
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
          </div>
        </>
      )}
    </div>
  );
};

export default Comics;
