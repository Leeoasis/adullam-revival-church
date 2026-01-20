import Home from "./routes/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Navbar from "../src/Navbar";
// import Footer from "../src/Footer";
// import About from "./routes/About"
// import Contact from "./routes/Contact"
// import Ministries from "./routes/Ministries"
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/ministries" element={<Ministries />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<ComingSoonPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
