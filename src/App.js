import homeImg from "./assets/gridtactica-background.jpeg";
import Game from "./components/game.component";

function App() {
  return (
    <div
      className="App h-[100dvh] w-full bg-cover bg-center shadow-xl flex  "
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <Game />
    </div>
  );
}

export default App;
