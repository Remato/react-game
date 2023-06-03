import styled, { keyframes } from "styled-components";

import { DIRECTION, SIZES } from "../../utils/enums";
import {
  playerWidth,
  playerHeight,
  playerBackgroundPosition,
} from "../../utils/helpers/handleSizes";

type AnimationProps = {
  animationPath: string;
  positionX: number;
  positionY: number;
  direction: string;
};

export const walking = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -192px;
  }
`;

const getDirection = ({ direction }: AnimationProps) => {
  return direction === DIRECTION.RIGHT ? 1 : -1;
};

export const Animation = styled.div<AnimationProps>`
  position: absolute;
  left: ${({ positionX }) => positionX * SIZES.TILE}px;
  top: ${({ positionY }) => positionY * SIZES.TILE - SIZES.HEAD_OFFSET}px;

  width: ${playerWidth()}px;
  height: ${playerHeight()}px;
  background-position: 0 ${playerBackgroundPosition()}px;

  background-repeat: no-repeat;
  animation: ${walking} 1s steps(4) infinite;
  background-image: ${({ animationPath }) => animationPath};
  transform: scaleX(${(props) => getDirection(props)});

  z-index: 1;
`;
