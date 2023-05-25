import styled, { keyframes } from "styled-components";

import { SIZES } from "../../utils/enums";
import {
  miniDemonWidth,
  miniDemonHeight,
  miniDemonBackgroundPosition,
} from "../../utils/helpers/handleSizes";

type AnimationProps = {
  animationPath: string;
};

export const walking = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -192px;
  }
`;

export const Animation = styled.div<AnimationProps>`
  position: absolute;
  bottom: ${7 * SIZES.TILE}px;
  left: ${4 * SIZES.TILE}px;

  width: ${miniDemonWidth()}px;
  height: ${miniDemonHeight()}px;
  background-position: 0 ${miniDemonBackgroundPosition()}px;
  background-repeat: no-repeat;
  animation: ${walking} 1s steps(4) infinite;
  background-image: ${({ animationPath }) => animationPath};
`;
