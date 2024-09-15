import "./App.css";
import About from "./componenets/About";
import Home from "./componenets/Home";
import Dsa from "./componenets/Dsa";
import Navbar from "./componenets/Navbar";
import { Route, Routes } from "react-router-dom";
import Code from "./componenets/Code";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dsa_nerds" element={<Dsa />} />
        <Route path ="/code/:id" element = {<Code/>} />
        <Route path="/Dsa_nerds/code/:id" element={<Dsa />} />
      </Routes>

      <div className="footer py-5">
        <div className="flex justify-center items-center relative">
        <p className="text-xl text-white">Made with ❤️ by <a className="text-grey underline" href="https://emojipedia.org/red-heart">Harsh</a></p>
        </div>
      </div>
    </>
  );
}

export default App;
