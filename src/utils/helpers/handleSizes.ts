import { SIZES } from "../enums";

export const miniDemonWidth = () => SIZES.MINI_DEMON_TILE;

export const miniDemonHeight = () => SIZES.MINI_DEMON_TILE + SIZES.HEAD_OFFSET;

export const miniDemonBackgroundPosition = () =>
  -(SIZES.TILE - SIZES.HEAD_OFFSET);

export const playerWidth = () => SIZES.PLAYER_TILE;

export const playerHeight = () => SIZES.PLAYER_TILE + SIZES.HEAD_OFFSET;

export const playerBackgroundPosition = () =>
  -(SIZES.PLAYER_TILE - SIZES.HEAD_OFFSET);

export const demonWidth = () => SIZES.DEMON_TILE;

export const demonHeight = () => SIZES.DEMON_TILE + SIZES.HEAD_OFFSET;

export const demonBackgroundPosition = () => -(SIZES.TILE - SIZES.HEAD_OFFSET);
