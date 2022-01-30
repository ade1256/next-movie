import { NextPage } from "next";
import { useEffect } from "react";
import { GET_MOVIES } from "../services/moviesAPI";
import { setMoviesData } from "../redux/movieSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { MovieCard } from "../components";
import useFavMovies from "../utils/useFavMovies";
import { useSelector } from "react-redux";
import { getLang } from "../redux/themeSlice";
import Constants from "../Config/Constants";
import useInfinityScroll from "../utils/useInfinityScroll";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { valueInfinityScroll } = useInfinityScroll({
    fetching: false,
    totalLoad: 10,
  });

  const movies = useAppSelector((state) => state.movies);
  const { handleAddFavourite, handleRemoveFavourite, isLiked } = useFavMovies(
    []
  );

  const lang = useSelector(getLang);

  const _renderMovies = () => {
    let elements = [] as any;

    for (let index = 0; index < valueInfinityScroll.totalLoad; index++) {
      elements.push(
        <MovieCard
          key={index}
          movie={movies.data[index]}
          addFavourite={handleAddFavourite}
          removeFavourite={handleRemoveFavourite}
          isLiked={isLiked}
        />
      );
    }

    return elements;
  };

  useEffect(() => {
    const fetchingMovies = async () => {
      const response = await GET_MOVIES();
      dispatch(setMoviesData(response.data.data));
    };
    fetchingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="header">
        <h4>{Constants.MESSAGE[`${lang}`].welcome}</h4>
        <p>{Constants.MESSAGE[`${lang}`].welcome_desc}</p>
      </div>
      {movies.status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div className="movies-section" id="movies">
          {_renderMovies()}
          {valueInfinityScroll.totalLoad !== movies.data.length && (
            <div style={{textAlign: 'center', width: '100%'}}>
              <div className="scroll">{Constants.MESSAGE[lang].load_more}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
