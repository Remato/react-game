import { Animation } from "./styles";

type Props = {
  initialPosition: Position;
};

function Trap({ initialPosition }: Props) {
  return (
    <Animation
      animationPath="url(./assets/TRAP.png)"
      positionX={initialPosition.x}
      positionY={initialPosition.y}
    />
  );
}

export default Trap;
