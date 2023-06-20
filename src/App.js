import { BrowserRouter, Route, Routes } from "react-router-dom";
import homeImg from "./assets/gridtactica-background.jpeg";
import Game3x3 from "./routes/game3x3.component";
import Game4x4 from "./routes/game4x4.component";
import Game5x5 from "./routes/game5x5.component";
import Navigation from "./routes/nav.component";

function App() {
  return (
    <BrowserRouter>
      <div
        className="App h-[100dvh] h-[100vh] w-full bg-cover bg-center shadow-xl flex "
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Game3x3 />} />
            <Route path="4x4" element={<Game4x4 />} />
            <Route path="5x5" element={<Game5x5 />} />/
          </Route>
          {/* Add more routes here if needed */}
        </Routes>

        {/* <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
