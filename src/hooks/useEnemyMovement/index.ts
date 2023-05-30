import useInterval from "@use-it/interval";
import { useState } from "react";

import { handleNextMove } from "../../contexts/canvas/helpers";
import { DIRECTION } from "../../utils/enums";

function useEnemyMovement(initialPosition: Position) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [direction, setDirection] = useState(DIRECTION.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 3);
    const directions = Object.values(DIRECTION);
    const randomDirection = directions[random];

    setDirection(randomDirection);
    setPosition(handleNextMove(position, randomDirection));
  }, 2000);

  return {
    position,
    direction,
  };
}

export default useEnemyMovement;
