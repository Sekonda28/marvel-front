import { useEffect, useState } from "react";
import axios from "axios";
import Comic from "../components/Comic";

const Comics = ({ favorisList, setFavorisList, liked, setLiked }) => {
  const [comics, setComics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");


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
            `https://marvel-api-back.herokuapp.com/comics?title=${search}`
          );
          setComics(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search]);

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
          <div className="comic-container">{comics.map((comic, index)=>{return(
          <Comic
            comic={comic}
            favorisList={favorisList}
            setFavorisList={setFavorisList}
            setLiked = {setLiked}
            liked={liked}
          />)})}
        </div></>

      )}
    </div>
  );
};

export default Comics;
