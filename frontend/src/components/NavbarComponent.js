import React from 'react';

export const NavbarComponent = () => {
  return (
    <div style={wholeNavbar}>
      <div style={leftStyle}>
          <div style= {{margin: 'auto'}}>DockChain</div>
      </div>
      <ul style={centerButtonsStyle}>
        <li>Home</li>
        <li>Discover</li>
        <li>Marketplace</li>
        <li>Support</li>
        <li>Community</li>
      </ul>
      <div style={rightStyle}>
        <div style={buttonStyle}>Connect wallet</div>
      </div>
    </div>
  );
};

const centerButtonsStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  //border: '3px solid red',
  height: '10vh',
  width: '50vw',
  padding: 0,
};

const leftStyle = {
  //border: '3px solid blue',
  height: '10vh',
  width: '25vw',
  textAlign: 'center',
  display: 'grid',
  fontSize: '1.5em',
  fontStyle: 'Bold',
}

  const rightStyle = {
  //border: '3px solid yellow',
  height: '10vh',
  width: '25vw',
  display: 'grid',
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
  width: '8vw',
  textAlign: 'center',
  fontSize: '0.8em',
  margin: 'auto',
  backgroundColor: '#17468D',}