import styled from "styled-components";

export const WrapModalImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  left: 0;
  top: 0;
  z-index: 1;
  display: ${props => (props.isShow ? "block" : "none")};

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.8);
  }

  .image-wrapper {
    position: absolute;
    z-index: 1;
    background: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin: 24px;
    padding: 8px;
    border-radius: 8px;
    height: 95%;
    text-align: center;
    img {
      height: 100%;
    }
    .close {
      position: absolute;
      right: 32px;
      top: 16px;
      color: #111;
      &:hover{
        cursor: pointer;
      }
    }
  }
`;
