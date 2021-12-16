import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UseReducer from "./pages/UseReducer/UseReducer";
import "./App.css";

const Home = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <br />
      <br />
      <div>
        <Link to="/usereducer">useReducer</Link>
        &nbsp;&nbsp;
        <Link to="/usereducer">useReducer</Link>
        &nbsp;&nbsp;
        <Link to="/usereducer">useReducer</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="usereducer" element={<UseReducer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
