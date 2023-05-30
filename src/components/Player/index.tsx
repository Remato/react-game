import useHeroMovement from "../../hooks/useHeroMovement";
import { Animation } from "./styles";

type Props = {
  initialPosition: Position;
};

function Player({ initialPosition }: Props) {
  const { direction, position } = useHeroMovement(initialPosition);

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
