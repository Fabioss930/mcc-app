// import { Tooltip } from 'components/tooltip';
import styled, { css } from "styled-components";

import { shade } from "polished";

interface ContainerProps {
  isErrored: boolean;
  style?: object;
}

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Container = styled.div<ContainerProps>`
  background: #f3ebeb;
  border-radius: 6px;
  border: 1px solid #f3ebeb;
  padding: 16px 18px;

  /* margin-top: 8px; */
  color: #666360;
  display: flex;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      outline: 1px solid ${shade(0.2, "#c53030")};
    `}

  & + div {
    margin-top: 8px;
  }

  &:focus-within {
    border-color: #717171;
    outline: 1px solid ${shade(0.2, "#717171")};
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 14px;
  }
  .icon {
    margin-right: 16px;
  }
  .icon_loading {
    margin-top: 3px;
  }
`;

// export const Error = styled(Tooltip)``;
