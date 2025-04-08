import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import HomeHeader from './Components/homeHeader';
import KeyFeatures from './Components/keyFeatures';


function App() {
  return (
    <div className="App">
    <Navbar />
    <HomeHeader />
    <KeyFeatures />
    </div>
  );
}

export default App;
