import useEventListener from "@use-it/event-listener";
import { useState } from "react";

import useCanvas from "../../stores/canvas.store";
import useGame from "../../stores/game.store";
import { DIRECTION, WALKER } from "../../utils/enums";

function useHeroMovement(initialPosition: Position) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const { doorsOpened, updateBoardMap } = useCanvas();
  const { increaseSteps } = useGame();

  useEventListener("keydown", (event: KeyboardEvent) => {
    const key = event.key as DIRECTION;

    if (key.indexOf("Arrow") === -1) return;

    const { nextPosition, validations } = updateBoardMap(
      position,
      key,
      WALKER.PLAYER
    );

    if (validations.door && doorsOpened) {
      setTimeout(() => {
        alert("YOU WIN!");
      });
      window.location.reload();
    }

    if (validations.dead) {
      setTimeout(() => {
        alert("YOU DIED!");
      });
      window.location.reload();
    }

    if (validations.valid) {
      increaseSteps();
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
