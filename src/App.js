import { BrowserRouter, Route } from "react-router-dom";
import homeImg from "./assets/gridtactica-background.jpeg";
import GameBoard from "./components/game.component";

function App() {
  return (
    // <div
    //   className="App h-[100dvh] h-[100vh] w-full bg-cover bg-center shadow-xl flex  "
    //   style={{ backgroundImage: `url(${homeImg})` }}
    // >
    //   <GameBoard />
    // </div>
    <BrowserRouter>
      <div
        className="App h-[100dvh] h-[100vh] w-full bg-cover bg-center shadow-xl flex  "
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <Route path="/" component={GameBoard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
