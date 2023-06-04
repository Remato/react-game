import { shade } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Scoreboard = styled.div`
  position: absolute;
  top: 4px;
  left: 360px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 4;
`;

export const DebugButton = styled.div`
  position: absolute;
  top: 0px;
  left: 200px;
  padding: 4px;
  color: #fff;
  font-weight: bold;
  background-color: #da4e38;
  display: block;
  box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${shade(0.25, "#da4e38")};
  }
`;

export const AudioButton = styled.div`
  position: absolute;
  top: 0px;
  left: 48px;
  padding: 4px;
  color: #fff;
  font-weight: bold;
  background-color: #589088;
  display: block;
  box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${shade(0.25, "#589088")};
  }
`;
