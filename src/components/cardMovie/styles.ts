import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  height: 390px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 14px;

  box-shadow: rgba(89, 78, 121, 0.24) 0px 3px 8px;

  .poster-movie {
    width: 180px;
    height: 276px;

    img {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      width: 100%;
      height: 100%;

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 6px;
        border-top-right-radius: 0;
      }
    }

    @media (max-width: 768px) {
      width: 100px;
      height: 140px;
    }
  }

  .title-movie {
    padding: 12px;
    font-size: 14px;
    font-weight: 700;
    color: #2e2e2e;
  }
  @media (max-width: 768px) {
    width: 355px;
    height: 140px;
    display: flex;
    margin: 0;
    flex-direction: row;
    align-items: center;
  }
`;
