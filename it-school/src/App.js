import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';
import HomeHeader from './Components/homeHeader';
import KeyFeatures from './Components/keyFeatures';
import AboutUs from './Components/aboutUs'; 
import Services from './Components/services';
import Contact from './Components/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomeHeader />
              <KeyFeatures />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
