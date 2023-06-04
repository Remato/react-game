import useGame from "../../stores/game.store";
import { DebugButton, AudioButton, Wrapper, Scoreboard } from "./styles";

function Button() {
  const { handleDebuggerMode, handlePlayMusic, playMusic, steps } = useGame();

  return (
    <Wrapper>
      <Scoreboard>Steps: {steps}</Scoreboard>
      <AudioButton
        onClick={() => {
          handlePlayMusic();
        }}
      >
        {playMusic ? "🔈 Music ON " : "🔇 Music OFF"}
      </AudioButton>
      <DebugButton
        onClick={() => {
          handleDebuggerMode();
        }}
      >
        🐞 Debbug Mode
      </DebugButton>
    </Wrapper>
  );
}

export default Button;
