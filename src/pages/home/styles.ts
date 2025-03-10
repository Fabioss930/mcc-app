import styled from "styled-components";

export const Title = styled.h2`
  width: 100%;
  padding: 12px 30px;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 26px;
    margin: 0;
    padding: 12px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 50px 30px;

  .content-erro {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .notify {
    font-size: 30px;
    color: #828282;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 200px;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 18px 16px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
`;
