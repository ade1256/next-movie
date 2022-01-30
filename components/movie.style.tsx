import styled from 'styled-components';

export const MovieWrapper = styled.div`
  position: relative;
  width: 100%;
  .poster {
    width: 100%;
    img {
      width: inherit;
      border-radius: 8px;
    }
    &:hover{
      cursor: pointer;
    }
  }
  .rating {
      img {
        width: 14px;
      }
      span {
        font-size: 14px;
        margin-left: 4px;
        position: relative;
        top: 2px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
`