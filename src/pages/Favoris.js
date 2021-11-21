import { useEffect, useState } from "react";
const Favoris = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const favourites = localStorage.getItem("favourites");
        setComics(JSON.parse(favourites));

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Favoris">
      {isLoading ? (
        <div className="isLoading">Page Loading...</div>
      ) : comics ? (
        <div className="comic-container">
          {comics.map((comic, index) => {
            return (
              <div className="comic-card" key={index}>
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt="Marvel hero"
                />
                <h2>{comic.title}</h2>

                <p>
                  {comic.description
                    ? comic.description
                    : "Description coming soon..."}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="fav-empty">
          <span>Your favourites are empty !</span>
        </div>
      )}
    </div>
  );
};
export default Favoris;
