import Home from "./routes/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Shop from "./routes/Shop"
// import About from "./routes/About"
// import Contact from "./routes/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
