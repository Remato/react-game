declare type ValidPosition = {
  valid: boolean;
  dead: boolean;
  chest: boolean;
  door: boolean;
};

declare type UpdatedPosition = {
  nextPosition: Position;
  validations: ValidPosition;
};

declare interface CanvaStore {
  doorsOpened: boolean;
  openedChests: number;
  canvasStage: number[][];
  canvasDebugger: number[][];
  getDebuggerMap(): JSX.Element[];
  getBoardMap(): JSX.Element[];
  updateBoardMap(
    position: Position,
    direction: string,
    walker: string
  ): UpdatedPosition;
}

declare interface GameStore {
  steps: number;
  playMusic: boolean;
  debbugerMode: boolean;
  increaseSteps(): void;
  handlePlayMusic(): void;
  handleDebuggerMode(): void;
}
