import "./App.css";
import { Board } from "./components";
import { SIZES } from "./utils/enums";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <div
        style={{ position: "relative", width: SIZES.GAME, height: SIZES.GAME }}
      >
        <Board />
      </div>
    </div>
  );
}

export default App;
