import styled, { keyframes } from "styled-components";

import { SIZES } from "../../utils/enums";

type AnimationProps = {
  animationPath: string;
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
  bottom: ${SIZES.TILE * 5}px;
  left: ${SIZES.TILE * 5}px;

  height: ${SIZES.CHEST}px;
  width: ${SIZES.CHEST}px;

  background-repeat: no-repeat;
  animation: ${chestOpening} 1s steps(3) infinite;
  background-image: ${({ animationPath }) => animationPath};
`;
