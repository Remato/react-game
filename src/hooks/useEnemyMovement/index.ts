import useInterval from "@use-it/interval";
import { useState } from "react";

import useCanvas from "../../stores/canvas.store";
import { DIRECTION, WALKER } from "../../utils/enums";

function useEnemyMovement(initialPosition: Position) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const { updateBoardMap } = useCanvas();

  useInterval(function move() {
    const random = Math.floor(Math.random() * 3);
    const directions = Object.values(DIRECTION);
    const randomDirection = directions[random];

    const { nextPosition, validations } = updateBoardMap(
      position,
      randomDirection,
      WALKER.ENEMY
    );

    if (validations.valid) {
      setDirection(randomDirection);
      setPosition(nextPosition);
    }
  }, 1000);

  return {
    position,
    direction,
  };
}

export default useEnemyMovement;
