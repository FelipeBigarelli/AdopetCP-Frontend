import styled, { css } from 'styled-components';

import ToolTip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  width: 100%;
  max-width: 260px;

  color: #000;
  border-radius: 10px;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;

  display: flex;
  align-items: center;

  & {
    margin-top: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      color: #ff0000;
      border-color: #ff0000;

      svg {
        color: #ff0000;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0800f0;
      border-color: #d200ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #3bfa25;
      border-color: #3bfa25;
    `}

    ${props =>
    props.isFilled &&
    props.isErrored &&
    css`
      border-color: #ff0000;
    `}

    

  input {
    background: transparent;
    flex: 1;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;
  position: relative;

  svg {
    margin: 0;
  }
`;
