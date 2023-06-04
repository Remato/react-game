import { DIRECTION, TILE_TYPE, WALKER } from "../../utils/enums";

export function handleNextMove(
  previousPosition: Position,
  key: string
): Position {
  switch (key) {
    case DIRECTION.UP:
      return {
        x: previousPosition.x,
        y: previousPosition.y - 1,
      };

    case DIRECTION.DOWN:
      return {
        x: previousPosition.x,
        y: previousPosition.y + 1,
      };

    case DIRECTION.RIGHT:
      return {
        x: previousPosition.x + 1,
        y: previousPosition.y,
      };

    case DIRECTION.LEFT:
      return {
        x: previousPosition.x - 1,
        y: previousPosition.y,
      };

    default:
      return previousPosition;
  }
}

export function isValidPosition(
  canva: number[][],
  nextPosition: Position,
  walker: string
) {
  const { x, y } = nextPosition;
  const tileType = canva[y][x];

  return walker === WALKER.PLAYER
    ? {
        valid: tileType !== TILE_TYPE.WALL,
        dead:
          tileType === TILE_TYPE.TRAP ||
          tileType === TILE_TYPE.MINI_DEMON ||
          tileType === TILE_TYPE.DEMON,
        chest: tileType === TILE_TYPE.CHEST,
        door: tileType === TILE_TYPE.DOOR,
      }
    : {
        valid: tileType === TILE_TYPE.FLOOR || tileType === TILE_TYPE.PLAYER,
        dead: tileType === TILE_TYPE.PLAYER,
        chest: false,
        door: false,
      };
}
