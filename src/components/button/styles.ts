import { shade } from "polished";
import styled from "styled-components";

interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  color?: string;
}

export const Container = styled.button<ButtonProps>`
  background-color: #2e2e2e;

  border-radius: 6px;
  border: 0;
  padding: 20px 0;
  width: 100%;
  color: #ffff;
  font-weight: 700;
  margin-top: 16px;
  transition: background-color 0.2s;
  flex-direction: row;
  align-items: center;

  span {
    color: #ffff;
    font-size: 14px;
  }

  &:hover {
    background: ${() => shade(0.4, "#2e2e2e")};
  }
`;
