import useEnemyMovement from "../../hooks/useEnemyMovement";
import { Animation } from "./styles";

type Props = {
  initialPosition: Position;
};

function MiniDemon({ initialPosition }: Props) {
  const { direction, position } = useEnemyMovement(initialPosition);

  return (
    <Animation
      animationPath="url(./assets/MINI_DEMON.png)"
      direction={direction}
      positionX={position.x}
      positionY={position.y}
    />
  );
}

export default MiniDemon;
