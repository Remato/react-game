import styled, { keyframes } from "styled-components";

import { SIZES } from "../../utils/enums";

type AnimationProps = {
  animationPath: string;
  positionX: number;
  positionY: number;
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
  top: ${({ positionY }) => SIZES.TRAP * positionY}px;
  left: ${({ positionX }) => SIZES.TRAP * positionX}px;

  height: ${SIZES.TRAP}px;
  width: ${SIZES.TRAP}px;

  background-repeat: no-repeat;
  animation: ${trapArising} 1s steps(8) infinite;
  background-image: ${({ animationPath }) => animationPath};
`;
