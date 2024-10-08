import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Quantum from "./pages/Quantum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/page/quantum" element={<Quantum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
