import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./containers/layout/layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
