import { Animation } from "./styles";

type Props = {
  initialPosition: Position;
};

function Chest({ initialPosition }: Props) {
  return (
    <Animation
      animationPath="url(./assets/CHEST.png)"
      positionX={initialPosition.x}
      positionY={initialPosition.y}
    />
  );
}

export default Chest;
