import { NextPage } from "next";
import { MovieCard } from "../../components";
import useFavMovies from "../../utils/useFavMovies";
import Constants from "../../Config/Constants";
import useTheme from "../../utils/useTheme";
import { useSelector } from "react-redux";
import { getLang } from "../../redux/themeSlice";

const FavouritePage: NextPage = () => {
  const {
    favourites,
    handleAddFavourite,
    handleRemoveFavourite,
    isLiked,
  } = useFavMovies([]);

  const lang = useSelector(getLang)
  const _renderMovies = () => {
    let elements = [] as any;

    favourites.map((movie, index) => {
      elements.push(
        <MovieCard
          key={index}
          movie={movie}
          addFavourite={handleAddFavourite}
          removeFavourite={handleRemoveFavourite}
          isLiked={isLiked}
        />
      );
    });

    return elements;
  };

  return (
    <div>
      {favourites.length === 0 ? (
        <div className="movies-section">
          <h2>{Constants.MESSAGE[`${lang}`].empty}</h2>
          <p>{Constants.MESSAGE[`${lang}`].empty_fav_desc}</p>
        </div>
      ) : (
        <div className="movies-section">{_renderMovies()}</div>
      )}
    </div>
  );
};

export default FavouritePage;
