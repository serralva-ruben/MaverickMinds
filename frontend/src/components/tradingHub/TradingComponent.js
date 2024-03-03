import React from 'react';
import { NavbarComponent } from '../NavbarComponent';
import HubNavbar from './HubNavbar.js';
import {Routes, Route, Outlet} from 'react-router-dom';

import { backgroundStyle } from './pages/style.js';

const TradingComponent = () => {
  return (
    <div style={backgroundStyle}>
        <div >
            <HubNavbar/>
            <div>
            <Outlet />
            </div>
        </div>
    </div>
  );
}

export default TradingComponent;
