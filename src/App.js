import Home from "./routes/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Ministries from "./routes/Ministries";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-bgLight text-textDark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
