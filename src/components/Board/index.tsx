import { useEffect, useRef } from "react";

import { Header, Debugger } from "..";

import useCanva from "../../stores/canvas.store";
import useGame from "../../stores/game.store";
import { SIZES } from "../../utils/enums";
import { Wrapper, OpenedDoor } from "./styles";

function Board() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { doorsOpened, getBoardMap } = useCanva();
  const { debbugerMode, playMusic } = useGame();

  if (playMusic) {
    audioRef?.current?.play();
  }

  return (
    <Wrapper>
      {getBoardMap()}
      {debbugerMode && <Debugger />}
      <Header />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        muted={!playMusic}
        loop
        autoPlay
        src="./assets/back_music.mp3"
        controls
        hidden
      />
      {doorsOpened && (
        <OpenedDoor alt="Opened_Door" src="./assets/DOOR_OPEN.png" />
      )}
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
