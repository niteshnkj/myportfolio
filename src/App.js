import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
