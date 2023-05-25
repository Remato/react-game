import styled, { keyframes } from "styled-components";

import { SIZES } from "../../utils/enums";

type AnimationProps = {
  animationPath: string;
};

export const walking = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -384px;
  }
`;

export const Animation = styled.div<AnimationProps>`
  position: absolute;
  left: ${SIZES.TILE * 4}px;
  bottom: ${SIZES.TILE * 2}px;

  width: ${SIZES.DEMON_TILE}px;
  height: ${SIZES.DEMON_TILE}px;
  background-repeat: no-repeat;
  animation: ${walking} 1s steps(4) infinite;
  background-image: ${({ animationPath }) => animationPath};
`;
