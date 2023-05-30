import useEnemyMovement from "../../hooks/useEnemyMovement";
import { Animation } from "./styles";

type Props = {
  initialPosition: Position;
};

function Demon({ initialPosition }: Props) {
  const { direction, position } = useEnemyMovement(initialPosition);

  return (
    <Animation
      animationPath="url(./assets/DEMON.png)"
      direction={direction}
      positionX={position.x}
      positionY={position.y}
    />
  );
}

export default Demon;
