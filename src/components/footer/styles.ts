import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #ffff;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
