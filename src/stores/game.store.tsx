import { create } from "zustand";

const useGame = create<GameStore>((set) => ({
  steps: 0,

  debbugerMode: false,

  playMusic: false,

  increaseSteps: (): void => {
    set((prevState) => ({ steps: prevState.steps + 1 }));
  },

  handleDebuggerMode: (): void => {
    set((prevState) => ({ debbugerMode: !prevState.debbugerMode }));
  },

  handlePlayMusic: (): void => {
    set((prevState) => ({ playMusic: !prevState.playMusic }));
  },
}));

export default useGame;
