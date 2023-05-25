export const handlePosition = (
  previousPosition: Position,
  key: string
): Position => {
  switch (key) {
    case "ArrowUp":
      return {
        x: previousPosition.x,
        y: previousPosition.y + 1,
      };

    case "ArrowDown":
      return {
        x: previousPosition.x,
        y: previousPosition.y - 1,
      };

    case "ArrowRight":
      return {
        x: previousPosition.x + 1,
        y: previousPosition.y,
      };

    case "ArrowLeft":
      return {
        x: previousPosition.x - 1,
        y: previousPosition.y,
      };

    default:
      return previousPosition;
  }
};
