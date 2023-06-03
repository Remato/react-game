import useEventListener from "@use-it/event-listener";
import { useState } from "react";

import useCanvas from "../../stores/canvas.store";
import { DIRECTION, WALKER } from "../../utils/enums";

function useHeroMovement(initialPosition: Position) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const { updateBoardMap } = useCanvas();

  useEventListener("keydown", (event: KeyboardEvent) => {
    const key = event.key as DIRECTION;

    if (key.indexOf("Arrow") === -1) return;

    const { nextPosition, validations } = updateBoardMap(
      position,
      key,
      WALKER.PLAYER
    );

    if (validations.dead) {
      console.log("YOU DIED");
    }

    if (validations.valid) {
      setDirection(key);
      setPosition(nextPosition);
    }
  });

  return {
    position,
    direction,
  };
}

export default useHeroMovement;
