import "./App.css";
import Index from "./components/layout";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
