import React from 'react';
import { connectWallet } from '../utils/blockchainServices';

export const NavbarComponent = () => {
  const handleWalletConnect = async () => {
      const address = await connectWallet();
};

  return (
    <div style={wholeNavbar}>
      <div style={leftStyle}>
          <div style= {{margin: 'auto'}}>DockChain</div>
      </div>
      <div style= {{width:'20vw'}}/>
        <ul style={centerButtonsStyle}>
          <button className="click" style={navBarButtonsStyle}>Home</button>
          <button className="click" style={navBarButtonsStyle}>Discover</button>
          <button className="click" style={navBarButtonsStyle}>Marketplace</button>
          <button className="click" style={navBarButtonsStyle}>Support</button>
          <button className="click" style={navBarButtonsStyle}>Community</button>
        </ul>
      <div style= {{width:'20vw'}}/>
      <div style={rightStyle}>
        <button style={buttonStyle} className="click" onClick={handleWalletConnect}>
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

const centerButtonsStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Updated property
  //border: '3px solid red',
  height: '4em',
  flex: 1, // Added property
  padding: 0,
};

const navBarButtonsStyle = {
  border: 'none',
  background: 'none',
  height: '4em',
}

const leftStyle = {
  //border: '3px solid blue',
  height: '4em',
  width: '20vw',
  textAlign: 'center',
  display: 'grid',
  fontSize: 'calc(0.6vw + 0.8em)',
  paddingLeft: '1vw',
  fontStyle: 'Bold',
}

  const rightStyle = {
  //border: '3px solid yellow',
  height: '4em',
  width: '20vw',
  display: 'grid',
  margin: 'auto',
}

const wholeNavbar={
  //border: '1px solid red',
  height: '4em',
  width: '100vw',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  background: 'rgba(0, 0, 0, 0.2)',
}

const buttonStyle = {
  marginTop: '1vh',
  padding: '0.5em',
  border: '1px solid #17468D',
  borderRadius: '15px',
  width: '8em',
  textAlign: 'center',
  fontSize: '0.8em',
  margin: 'auto',
}