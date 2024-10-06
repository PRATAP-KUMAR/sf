import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
