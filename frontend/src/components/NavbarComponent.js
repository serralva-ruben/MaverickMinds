import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


import { RiHomeFill } from "react-icons/ri";
import { GrCircleInformation } from "react-icons/gr";
import { CiMap } from "react-icons/ci";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { RiContactsBook2Line } from "react-icons/ri";


export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <ul style={stylesheet}>
        <li ><RiHomeFill/>Home</li>
        <li ><GrCircleInformation/>How it Works</li>
        <li ><CiMap/>Explore</li>
        <li ><MdOutlineGeneratingTokens/>Tokenomics</li>
        <li ><FaQuestion/>FAQ </li>
        <li ><IoIosContacts/>About Us</li>
        <li ><RiContactsBook2Line/>Contact</li>
      </ul>
    </Navbar>
  );
};

const stylesheet = {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    justifyContent: 'space-evenly',
    border: '1px solid red',
    height: '80vh',
    width: '10em',
    marginTop: '0vh',
}