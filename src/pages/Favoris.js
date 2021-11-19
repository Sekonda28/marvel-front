import { useEffect, useState } from "react";
import axios from "axios";

const Favoris = ({ setFavorisList, favorisList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicData, setComicData] = useState();
  const [lsTab, setLsTab] = useState([]);
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
  const newFav = JSON.parse(favourites);
  console.log(newFav);

  // Filter against ComicData and push matches

  // for (let i = 0; i < comicData.length; i++) {
  //   for (let j = 0; j < newFav.length; j++) {
  //     if (newFav[j] === comicData[i]._id) {
  //       const newTab = [...lsTab];
  //       newTab.push(comicData[i]);
  //       setLsTab(newTab);
  //       console.log(lsTab);
  //     }
  //   }
  // }

  return (
    <div className="Favoris">
      {isLoading ? (
        <div className="isLoading">Page Loading...</div>
      ) : (
        <div>{favorisList}</div>
      )}
    </div>
  );
};
export default Favoris;
