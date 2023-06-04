import styled from "styled-components";

import { TILE_TYPE } from "../../utils/enums";

type Props = {
  position: Position;
  tileType: number;
};

const getColor = ({ tileType }: Props) => {
  switch (tileType) {
    case TILE_TYPE.WALL:
      return "#c4e500";
    case TILE_TYPE.FLOOR:
      return "darkgrey";
    case TILE_TYPE.DOOR:
      return "white";
    case TILE_TYPE.TRAP:
      return "chartreuse";
    case TILE_TYPE.DEMON:
    case TILE_TYPE.MINI_DEMON:
      return "#e52100";
    case TILE_TYPE.CHEST:
      return "cyan";
    case TILE_TYPE.PLAYER:
      return "magenta";
    default:
      return "transparent";
  }
};

export const Wrapper = styled.div<Props>`
  position: absolute;
  left: ${({ position }) => position.x * 48}px;
  top: ${({ position }) => position.y * 48}px;
  height: 48px;
  width: 48px;
  border: 2px solid ${(props) => getColor(props)};
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => getColor(props)};
  opacity: 0.8;

  z-index: 3;
`;
