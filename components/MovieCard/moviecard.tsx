/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { WrapMovieCard } from "./moviecard.style";
import assets from "../../Assets";
import Constants from "../../Config/Constants";
import { useSelector } from "react-redux";
import { getLang } from "../../redux/themeSlice";
import { useRouter } from "next/router";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    rating: number;
    year: number;
    imageUrl: string;
  };
  addFavourite: (movie: any) => void;
  removeFavourite: (movie: any) => void;
  isLiked: (movie: any) => boolean;
}

const MovieCard: FC<MovieCardProps> = ({ movie, addFavourite, isLiked, removeFavourite }) => {
  const lang = useSelector(getLang);
  const router = useRouter();
  return (
    <WrapMovieCard>
      <div className="movie-card">
        <div className="movie-card-image" onClick={() => router.push(`/movie/${movie.id}`)}>
          <img src={movie.imageUrl} alt={movie.title} />
        </div>
        <div className="movie-card-details">
          <div className="title">
            <h4>{movie.title}</h4>
            <p>{movie.year}</p>
          </div>
          <div className="right">
            <span className="rating">
              <img src={assets.icon.stars} alt="rating" />
              <span>{movie.rating}</span>
            </span>
            {isLiked(movie) ? (
              <span className="like" onClick={() => removeFavourite(movie)}>
                <img src={assets.icon.heart_red} alt="heart" />
                <span>{Constants.MESSAGE[`${lang}`].unlike}</span>
              </span>
            ) : (
              <span className="like" onClick={() => addFavourite(movie)}>
                <img src={assets.icon.heart} alt="heart" />
                <span>{Constants.MESSAGE[`${lang}`].like}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </WrapMovieCard>
  );
};

export default MovieCard;
