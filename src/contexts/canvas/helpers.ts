import { DIRECTION } from "../../utils/enums";

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
