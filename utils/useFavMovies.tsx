import { useCallback, useEffect, useState } from "react";

const useFavMovies = (initialValue = [], localKey = "favouriteMovies") => {
  const [favourites, setFavourites] = useState(() => {
    try {
      const item = window.localStorage.getItem(localKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(
    () => window.localStorage.setItem(localKey, JSON.stringify(favourites)),
    [favourites, localKey]
  );

  const handleAddFavourite = useCallback(
    (movie) => {
      const removeduplicate = favourites.filter((fav) => fav.id !== movie.id);
      setFavourites([...removeduplicate, movie]);
    },
    [favourites]
  );

  const handleRemoveFavourite = useCallback(
    (movie) => {
      const removeduplicate = favourites.filter((fav) => fav.id !== movie.id);
      setFavourites(removeduplicate);
    },
    [favourites]
  );

  const isLiked = useCallback(
    (movie) => {
      return favourites.some((fav) => fav.id === movie.id);
    },
    [favourites]
  );

  return {
    favourites,
    setFavourites,
    handleAddFavourite,
    handleRemoveFavourite,
    isLiked,
  };
};

export default useFavMovies;
