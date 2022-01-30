/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import moment from "moment";
import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Assets from "../../Assets";
import { PopupImage } from "../../components";
import Constants from "../../Config/Constants";
import { getLang } from "../../redux/themeSlice";
import { GET_MOVIE } from "../../services/moviesAPI";
import { MovieWrapper } from "./movie.style";

function MoviePage({ movie }) {
  const [isShow, setIsShow] = useState(false);
  const lang = useSelector(getLang);

  const togglePopup = () => {
    setIsShow(!isShow);
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <MovieWrapper>
      <PopupImage
        isShow={isShow}
        src={movie.data.imageLargeUrl}
        handleToggle={togglePopup}
      />
      <NextSeo
        title={`${Constants.MESSAGE[lang].title_seo}${movie.data.title} (${movie.data.year})`}
        description={movie.data.desc}
      />
      <Row gutter={24}>
        <Col xs={24} md={4}>
          <div className="poster" onClick={() => togglePopup()}>
            <img src={movie.data.imageUrl} alt={movie.data.title} />
          </div>
        </Col>
        <Col md={14} xs={24}>
          <h4>
            {movie.data.title} ({movie.data.year})
          </h4>
          <p>
            {Constants.MESSAGE[lang].release}{" "}
            {moment(movie.data.releaseDate).format("DD MMMM YYYY")}
          </p>
          <p>
            {Constants.MESSAGE[lang].duration} {movie.data.duration}
          </p>
          <p>
            {Constants.MESSAGE[lang].genre} {movie.data.genre}
          </p>
          <p>
            <span className="rating">
              <span>{Constants.MESSAGE[lang].rating} </span>
              <img src={Assets.icon.stars} alt="rating" />
              <span> {movie.data.rating}</span>
            </span>
          </p>
          <p>
            {Constants.MESSAGE[lang].starring}{" "}
            {movie.data.starring.map((star, key) => (
              <span key={key}>
                {star}
                {key + 1 !== movie.data.starring.length && `,`}{" "}
              </span>
            ))}
          </p>
          <br />
          <p>{Constants.MESSAGE[lang].desc}</p>
          <p>{movie.data.desc}</p>
        </Col>
      </Row>
    </MovieWrapper>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await GET_MOVIE(1);

  // Pass data to the page via props
  return { props: { movie: res.data } };
}

export default MoviePage;
