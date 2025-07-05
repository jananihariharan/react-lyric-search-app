import "./App.css";
import Index from "./components/layout";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" Component={Index} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
