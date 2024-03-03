import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import HomeComponent from './components/HomeComponent.js';
import TradingComponent from './components/tradingHub/TradingComponent.js';
import BuyComponent from './components/tradingHub/pages/BuyComponent.js';
import LeaseComponent from './components/tradingHub/pages/LeaseComponent.js';
import EmergencyComponent from './components/tradingHub/pages/EmergencyComponent.js';
import { NavbarComponent } from './components/NavbarComponent.js';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/Hub" element={<TradingComponent/>}>
          <Route path="buy" element={<BuyComponent />} />
          <Route path="lease" element={<LeaseComponent />} />
          <Route path="emergency" element={<EmergencyComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
