import homeImg from "./assets/gridtactica-background.jpeg";
import GameBoard from "./components/game.component";

function App() {
  return (
    <div
      className="App h-[100dvh] h-[100vh] w-full bg-cover bg-center shadow-xl flex  "
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <GameBoard />
    </div>
  );
}

export default App;
