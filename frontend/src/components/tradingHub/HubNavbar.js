import React from 'react';

const HubNavbar = () => {
  return (
    <div>
        <div style={navbar}>
            <ul style = {navbarbuttonsCentralDiv}>
            <button style = {buttonStyle}>Lease</button>
            <button style = {buttonStyle}>Buy/Sell</button>
            <button style = {buttonStyle}>Emergency Supply</button>
            <button style = {buttonStyle}>Support</button>
            </ul>
        </div>
    </div>
  );
};

const buttonStyle = {
    backgroundColor: '#f1f1f1',
    border: 'none',
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    fontSize: '16px',
    padding: '10px 15px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    width: '100%',
    border: '1px solid #e7e7e7',
    border:  '1px solid red',
}

const navbar = {
    listStyleType: 'none',
    orientation: 'vertical',
    margin: 0,
    padding: 0,
    backgroundColor: '#f1f1f1',
    position: 'fixed',
    width: '7em',
    height: '100%',
    overflow: 'auto',
    border: '1px solid #e7e7e7',
    border:  '1px solid red',
};

const navbarbuttonsCentralDiv={
    border:  '1px solid red',
    width: '100%',
    marginLeft: '0',
}


export default HubNavbar;
