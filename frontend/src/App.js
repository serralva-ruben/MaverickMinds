import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import TradingComponent from './components/tradingHub/TradingComponent';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/Hub" element={<TradingComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
