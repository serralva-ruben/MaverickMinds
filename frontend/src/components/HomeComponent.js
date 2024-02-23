import React from 'react';
import { NavbarComponent } from './NavbarComponent.js';
import HomeText from './text.js';
import image1 from '../assets/img/worldwide-shipping.png';

const HomeComponent = () => {
    return (
        <div style={homeStyle}>
            <NavbarComponent />
            <div style={homePageStyle}>
                <div>
                    <h1 style={bigText}>{HomeText['BigText']}</h1>
                    <h1 style={smallText}>{HomeText['littleText']}</h1>
                    <div>
                        <div style={buttonDiv}>
                            <button style={buttonStyle} className="click">Explore</button>
                            <button style={buttonStyle} className="click">Create</button>
                        </div>
                        <div style={statsDiv}>
                            <div>
                                <div style={statValueStyle}>0</div>
                                <div style={statLabelStyle}>containers</div>
                            </div>
                            <div style={dividerStyle}/>
                            <div>
                                <div style={statValueStyle}>0</div>
                                <div style={statLabelStyle}>users</div>
                            </div>
                            <div style={dividerStyle}/>
                            <div>
                                <div style={statValueStyle}>0</div>
                                <div style={statLabelStyle}>supplied</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={imgDiv}><img src={image1} style={imgStyle}/></div>

            </div>
        </div>
    );
};

const homeStyle = {
    backgroundColor: '#2164C9',
};

const imgDiv = {
    //border: '1px solid red',
    marginTop: '30vh',
    width: '40%',
    height: '30em',
    display: 'flex',
    justifyContent: 'flex-end',
}

const imgStyle = {
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%',
}

const homePageStyle = {
    display: 'flex',
    //border: '1px solid red',
    height: '400vh',
    justifyContent: 'flex-start',
};

const bigText = {
    //border: '1px solid red',
    height: 'auto',
    width: '35vw',
    marginTop : '35vh',
    marginLeft: '10vw',
    marginBottom: '0.2em',
    textAlign: 'left',
    fontSize: '3em',
    color: 'white',
    fontStyle: 'Police s',
}

const smallText = {
    //border: '1px solid red',
    height: 'auto',
    width: '30vw',
    marginTop : '0vh',
    marginLeft: '10vw',
    textAlign: 'left',
    fontSize: '1em',
    color: 'white'
}

const buttonDiv ={
    //border: '1px solid red',
    height: '2.5em',
    width: '20vw',
    marginLeft: '10vw',
    textAlign: 'left',
    fontSize: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const buttonStyle = {
    border: '3px solid #17468D',
    borderRadius: '15px',
    width: '8vw',
    textAlign: 'left',
    fontSize: '0.8em',
    textAlign: 'center',
    padding: '0.3em',
    margin: '0.35em',
    display: 'grid',
}

const statsDiv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20vw',
    marginLeft: '10vw',
    marginTop: '3em',
    color: 'white',
}

const statValueStyle = {
    fontSize: '3em',
    color: '#17468D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
}

const statLabelStyle = {
    fontSize: '0.8em',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: '0.5em',
}

const dividerStyle = {
    border: '1px solid lightgrey',
    width: '0.01em',
    marginTop: '1em',
}

export default HomeComponent;
