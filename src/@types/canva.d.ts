declare type ValidPosition = {
  valid: boolean;
  dead: boolean;
  chest: boolean;
  door: boolean;
};

declare type UpdatedPosition = {
  nextPosition: Position;
  validations: {
    valid: boolean;
    dead: boolean;
  };
};

declare interface CanvaStore {
  canvasStage: number[][];
  canvasDebugger: number[][];
  getDebuggerMap(): JSX.Element[];
  getBoardMap(): JSX.Element[];
  updateBoardMap(
    position: Position,
    direction: string,
    walker: string
  ): UpdatedPosition;
  isValidPosition(nextPosition: Position, walker: string): ValidPosition;
}
