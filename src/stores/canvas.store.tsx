import { create } from "zustand";

import { Chest, Demon, MiniDemon, Player, Tile, Trap } from "../components";
import { handleNextMove, isValidPosition } from "../contexts/canvas/helpers";
import { TILE_TYPE } from "../utils/enums";

const useCanvas = create<CanvaStore>((set, get) => ({
  doorsOpened: false,

  // 2 chests by map
  openedChests: 0,

  canvasStage: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1],
    [1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  canvasDebugger: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1],
    [1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  getDebuggerMap: (): JSX.Element[] => {
    const debuggerTiles: JSX.Element[] = [];

    const map = get().canvasDebugger;

    for (let i = 0; i < map.length; i += 1) {
      for (let j = 0; j < map[i].length; j += 1) {
        const position = { x: j, y: i } as Position;
        const tileType = map[i][j];
        const key = `${i}-${j}`;

        debuggerTiles.push(
          <Tile key={key} position={position} tileType={tileType} />
        );
      }
    }
    return debuggerTiles;
  },

  getBoardMap: (): JSX.Element[] => {
    const boardTiles: JSX.Element[] = [];

    const map = get().canvasStage;

    for (let i = 0; i < map.length; i += 1) {
      for (let j = 0; j < map[i].length; j += 1) {
        const position = { x: j, y: i } as Position;
        const tileType = map[i][j];
        const key = `${i}-${j}`;

        switch (tileType) {
          case TILE_TYPE.PLAYER:
            boardTiles.push(<Player key={key} initialPosition={position} />);
            break;
          case TILE_TYPE.TRAP:
            boardTiles.push(<Trap key={key} initialPosition={position} />);
            break;
          case TILE_TYPE.MINI_DEMON:
            boardTiles.push(<MiniDemon key={key} initialPosition={position} />);
            break;
          case TILE_TYPE.DEMON:
            boardTiles.push(<Demon key={key} initialPosition={position} />);
            break;
          case TILE_TYPE.CHEST:
            boardTiles.push(<Chest key={key} initialPosition={position} />);
            break;
          case TILE_TYPE.OPENED_CHEST:
            boardTiles.push(
              <Chest isOpen key={key} initialPosition={position} />
            );
            break;

          default:
            break;
        }
      }
    }
    return boardTiles;
  },

  updateBoardMap: (position, direction, walker) => {
    const nextPosition = handleNextMove(position, direction);
    const { valid, chest, door, dead } = isValidPosition(
      get().canvasDebugger,
      nextPosition,
      walker
    );

    if (valid) {
      const bufferCanvas = get().canvasDebugger;

      const currentTile = bufferCanvas[position.y][position.x];
      bufferCanvas[position.y][position.x] = TILE_TYPE.FLOOR;
      bufferCanvas[nextPosition.y][nextPosition.x] = currentTile;

      set(() => ({ canvasDebugger: bufferCanvas }));
    }

    if (chest) {
      const bufferCanvasStage = get().canvasStage;
      const bufferCanvasDebbuger = get().canvasDebugger;

      const currentTile = bufferCanvasDebbuger[position.y][position.x];
      bufferCanvasDebbuger[position.y][position.x] = TILE_TYPE.FLOOR;
      bufferCanvasDebbuger[nextPosition.y][nextPosition.x] = currentTile;

      bufferCanvasStage[position.y][position.x] = TILE_TYPE.FLOOR;
      bufferCanvasStage[nextPosition.y][nextPosition.x] =
        TILE_TYPE.OPENED_CHEST;

      const openDoor = get().openedChests === 1 && chest;

      set((prevState) => ({
        canvasDebugger: bufferCanvasDebbuger,
        canvasStage: bufferCanvasStage,
        openedChests: prevState.openedChests + 1,
        doorsOpened: openDoor,
      }));
    }

    return { nextPosition, validations: { valid, chest, door, dead } };
  },
}));

export default useCanvas;
