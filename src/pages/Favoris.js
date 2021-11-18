import { useEffect, useState } from "react";

const Favoris = ({ setFavorisList, favorisList }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const favourites = localStorage.getItem("favourites");
      const newTab = [];
      if (favourites !== null) {
        newTab.push(favourites.split(","));
        setFavorisList(newTab);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }, [favorisList, setFavorisList]);

  return <div> {isLoading ? <p>Loading...</p> : { favorisList }}</div>;
};

export default Favoris;
