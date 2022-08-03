import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { UpdateDCB } from "./components/UpdateDCB/UpdateDCB";
import Dummy from "./components/Dummy/Dummy.js";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Dummy />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dcb" element={<UpdateDCB />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
