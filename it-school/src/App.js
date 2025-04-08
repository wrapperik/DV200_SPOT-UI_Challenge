import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';
import HomeHeader from './Components/homeHeader';
import KeyFeatures from './Components/keyFeatures';
import AboutUs from './Components/aboutUs'; 


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
