import "./App.css";
import Home from "./Components/Home";
import Description from "./Components/Description";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Description" element={<Description />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
