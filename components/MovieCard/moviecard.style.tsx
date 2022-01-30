import styled from "styled-components";

export const WrapMovieCard = styled.div`
  position: relative;
  width: 200px;
  margin-bottom: 24px;
  margin-left: 39px;
  .movie-card {
    position: relative;
  }
  .movie-card-image {
    img {
      border-radius: 8px;
      width: 100%;
      height: 300px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .movie-card-details {
    display: flex;
    justify-content: space-between;
    .rating,
    .like {
      display: block;
    }
    .rating {
      img {
        width: 14px;
      }
      span {
        font-size: 14px;
        margin-left: 4px;
        position: relative;
        top: 1px;
      }
    }
    .like {
      &:hover {
        cursor: pointer;
      }
      img {
        width: 14px;
      }
      span {
        font-size: 14px;
        margin-left: 4px;
        position: relative;
        top: 1px;
      }
    }
  }
`;
