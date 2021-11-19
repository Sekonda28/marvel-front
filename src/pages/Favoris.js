import { useEffect, useState } from "react";
import axios from "axios";

const Favoris = ({ setFavorisList, favorisList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicData, setComicData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-api-back.herokuapp.com/comics"
        );
        setComicData(response.data);


        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);


  const favourites = localStorage.getItem("favourites");
  // console.log(favourites);
  // const newTab = [];
  // if (favourites !== null) {
  //   newTab.push(favourites.split(","));
  //   setFavorisList(newTab);
  //   console.log(favorisList);
  // }

  return (
    <div className="Favoris">
      
      {isLoading ? (
        <div className="isLoading">Page Loading...</div>
      ) : (
        <div>{favourites}</div>
      )}
    </div>
  );
};
export default Favoris;
