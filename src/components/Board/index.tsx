import { Debugger } from "..";

import useCanva from "../../stores/canvas.store";
import { SIZES } from "../../utils/enums";
import { Wrapper } from "./styles";

function Board() {
  const { getBoardMap } = useCanva();

  return (
    <Wrapper>
      {getBoardMap()}
      <Debugger />
      <img
        alt="Board_Game"
        src="./assets/tileset.gif"
        width={SIZES.GAME}
        height={SIZES.GAME}
      />
    </Wrapper>
  );
}

export default Board;
