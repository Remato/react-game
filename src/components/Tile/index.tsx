import { Wrapper } from "./styles";

type Props = {
  position: Position;
  tileType: number;
};

function Tile({ position, tileType }: Props) {
  return (
    <Wrapper position={position} tileType={tileType}>
      {tileType}
    </Wrapper>
  );
}

export default Tile;
