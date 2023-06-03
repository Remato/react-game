import useCanva from "../../stores/canvas.store";
import { Wrapper } from "./styles";

function Debugger() {
  const { getDebuggerMap } = useCanva();

  return <Wrapper>{getDebuggerMap()}</Wrapper>;
}

export default Debugger;
