import styled, { css, keyframes } from "styled-components";

import { SIZES } from "../../utils/enums";

type AnimationProps = {
  isOpen: boolean;
  animationPath: string;
  positionX: number;
  positionY: number;
};

export const chestOpening = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -144px;
  }
`;

export const Animation = styled.div<AnimationProps>`
  position: absolute;
  top: ${({ positionY }) => SIZES.TILE * positionY}px;
  left: ${({ positionX }) => SIZES.TILE * positionX}px;

  height: ${SIZES.CHEST}px;
  width: ${SIZES.CHEST}px;

  background-repeat: no-repeat;
  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${chestOpening} 1s steps(3) infinite
        `
      : null};
  background-image: ${({ animationPath }) => animationPath};
`;
