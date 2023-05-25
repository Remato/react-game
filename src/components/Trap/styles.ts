import styled, { keyframes } from "styled-components";

import { SIZES } from "../../utils/enums";

type AnimationProps = {
  animationPath: string;
};

export const trapArising = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -384px;
  }
`;

export const Animation = styled.div<AnimationProps>`
  position: absolute;
  bottom: ${SIZES.TILE * 2}px;
  left: ${SIZES.TILE * 8}px;

  height: 100px;
  width: ${SIZES.TRAP}px;

  background-repeat: no-repeat;
  animation: ${trapArising} 1s steps(8) infinite;
  background-image: ${({ animationPath }) => animationPath};
`;
