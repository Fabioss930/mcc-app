import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;

  .content-logo {
    width: 100px;

    img {
      width: 100%;
    }
  }

  .content-button-signout {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      color: #ffff;
      background-color: transparent;
      border: transparent;
      padding: 6px;
      border-radius: 6px;
      cursor: pointer;

      span {
        margin-right: 6px;
      }
    }
  }
`;
