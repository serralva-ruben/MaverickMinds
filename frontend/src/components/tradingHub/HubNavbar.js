import React from 'react';
import { Link } from 'react-router-dom';


const HubNavbar = () => {
  return (
    <div >
        <div style={navbar}>
            <ul style = {navbarbuttonsCentralDiv}>
            <button style ={buttonStyle}> <Link to= "/Hub/buy"><a style={anchorStyle}>Lease</a></Link> </button>
            <button style ={buttonStyle}> <Link to="/Hub/lease"><a style={anchorStyle}>Buy/Sell</a></Link> </button>
            <button style ={buttonStyle}> <Link to="/Hub/emergency"><a style={anchorStyle}>Emergency Supply</a></Link> </button>
            <button style ={buttonStyle}> <Link to=""><a style={anchorStyle}>Support</a></Link> </button>
            </ul>

        </div>
    </div>
  );
};

const buttonStyle = {
    backgroundColor: 'lightblue',
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
    border:  '1px solid red',
    height: '4em',
}

const navbar = {
    listStyleType: 'none',
    orientation: 'vertical',
    margin: 0,
    padding: 0,
    position: 'fixed',
    width: '7em',
    height: '100%',
    overflow: 'auto',
    border:  '1px solid red',
    justifyContent: 'center',
    display: 'flex',
    marginTop: '4em',
};

const navbarbuttonsCentralDiv={
    border:  '1px solid red',
    width: '100%',
    padding: 0,
    margin: '0 auto',
    position: 'absolute',
    top: '30%',
    marginTop: '-15%',
    
}

const anchorStyle = {
    testDecorator: 'none',
    color: 'white',
    cursor: 'pointer',
}


export default HubNavbar;
