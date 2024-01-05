import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
// import { Suspense } from "react";
// import Shimmer from "./components/Shimmer";
function App() {
  return (
    // <Suspense fallback={<Shimmer />}>
      <Router>
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
          </Routes>
        </>
      </Router>
    // </Suspense>
  );
}

export default App;
