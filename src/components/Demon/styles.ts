import styled, { keyframes } from "styled-components";

import { DIRECTION, SIZES } from "../../utils/enums";

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
    background-position-x: -384px;
  }
`;

const getDirection = ({ direction }: AnimationProps) => {
  return direction === DIRECTION.RIGHT ? 1 : -1;
};

export const Animation = styled.div<AnimationProps>`
  position: absolute;
  left: ${({ positionX }) => positionX * SIZES.TILE}px;
  top: ${({ positionY }) => positionY * SIZES.TILE}px;

  width: ${SIZES.DEMON_TILE}px;
  height: ${SIZES.DEMON_TILE}px;
  background-repeat: no-repeat;
  animation: ${walking} 1s steps(4) infinite;
  background-image: ${({ animationPath }) => animationPath};
  transform: scaleX(${(props) => getDirection(props)});
`;
