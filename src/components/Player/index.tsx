import useEventListener from "@use-it/event-listener";
import { useState } from "react";

import { DIRECTION } from "../../utils/enums";
import { handlePosition } from "../../utils/helpers";
import { Animation } from "./styles";

function Player() {
  const [direction, setDirection] = useState(DIRECTION.RIGHT);
  const [position, setPosition] = useState<Position>({
    x: 1,
    y: 2,
  });

  useEventListener("keydown", ({ key }: KeyboardEvent) => {
    if (key === "ArrowRight") setDirection(DIRECTION.RIGHT);
    else if (key === "ArrowLeft") setDirection(DIRECTION.LEFT);

    setPosition(handlePosition(position, key));
  });

  return (
    <Animation
      animationPath="url(./assets/HERO.png)"
      direction={direction}
      positionX={position.x}
      positionY={position.y}
    />
  );
}

export default Player;
