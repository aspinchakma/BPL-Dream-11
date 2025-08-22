import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PlayerDetails from "./Components/PlayerDetails";
import Fixture from "./Pages/Fixture";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Schedules from "./Pages/Schedules";
import Teams from "./Pages/Teams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
        {/* Catch All Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
