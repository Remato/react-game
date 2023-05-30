import useEventListener from "@use-it/event-listener";
import { useState } from "react";

import { handleNextMove } from "../../contexts/canvas/helpers";
import { DIRECTION } from "../../utils/enums";

function useHeroMovement(initialPosition: Position) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [direction, setDirection] = useState(DIRECTION.RIGHT);

  useEventListener("keydown", (event: KeyboardEvent) => {
    const key = event.key as DIRECTION;

    if (key.indexOf("Arrow") === -1) return;

    setDirection(key);
    setPosition(handleNextMove(position, key));
  });

  return {
    position,
    direction,
  };
}

export default useHeroMovement;
