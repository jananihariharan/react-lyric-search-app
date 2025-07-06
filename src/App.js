import "./App.css";
import Index from "./components/layout";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./context";
import Lyrics from "./components/tracks/lyrics";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" Component={Index} />
              <Route exact path="/lyrics/track/:id" Component={Lyrics} />
            </Routes>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
