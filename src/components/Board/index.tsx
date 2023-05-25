import { Player, MiniDemon, Demon, Chest, Trap } from "..";

import { SIZES } from "../../utils/enums";
import { Wrapper } from "./styles";

function Board() {
  return (
    <Wrapper>
      <MiniDemon />
      <Player />
      <Demon />
      <Chest />
      <Trap />
      <img
        alt=""
        src="./assets/tileset.gif"
        width={SIZES.GAME}
        height={SIZES.GAME}
      />
    </Wrapper>
  );
}

export default Board;
