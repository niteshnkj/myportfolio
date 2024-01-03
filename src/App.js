import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
        <Portfolio />
        <Contact />
        <Footer /> 
      </>
    </Router>
  );
}

export default App;
