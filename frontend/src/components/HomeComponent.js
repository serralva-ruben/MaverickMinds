import React from 'react';
import { NavbarComponent } from './NavbarComponent.js';
import text from './text.js';
const HomeComponent = () => {

    return (
        <div>
            <NavbarComponent />
            <div style={stylesheet}>
                <ul style={listStyle}>
                    {Object.keys(text).map((key) => (
                        <li key={key} style={{ ...listItemStyle, float: key % 2 === 0 ? 'left' : 'right' }}>
                            {text[key]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const stylesheet = {
    display: 'flex',
    border: '1px solid red',
    height: '400vh',
    justifyContent: 'center',
    marginLeft: '14em',
};

const listStyle = {
    border: '1px solid blue',
    width: '70%',
    listStyleType: 'none',
};

const listItemStyle = {
    border: '1px solid blue',
    width: '80%',
    height: 'auto',
};

export default HomeComponent;
