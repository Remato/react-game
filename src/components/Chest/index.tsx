import { Animation } from "./styles";

type Props = {
  isOpen?: boolean;
  initialPosition: Position;
};

function Chest({ isOpen = false, initialPosition }: Props) {
  return (
    <Animation
      isOpen={isOpen}
      animationPath="url(./assets/CHEST.png)"
      positionX={initialPosition.x}
      positionY={initialPosition.y}
    />
  );
}

export default Chest;
