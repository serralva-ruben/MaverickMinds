import React from 'react';
import { NavbarComponent } from './NavbarComponent.js';
import HomeText from './text.js';
import image1 from '../assets/img/worldwide-shipping.png';
import video1 from '../assets/video/video.mp4';

const HomeComponent = () => {
    return (
        <div style={homeStyle}>
            <video autoPlay loop muted style={backgroundVideoStyle}>
                <source src={video1} />
            </video>
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
                {false ? <div style={imgDiv}><img src={image1} alt="image1" style={imgStyle}/></div> : null}
            </div>
            <div style={DiscoverPageStyle}>
                <p>sads</p>
            </div>
        </div>
    );
};

const homeStyle = {
    //backgroundColor: '#2164C9',
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
    height: '50em',
    justifyContent: 'flex-start',
};

const bigText = {
    //border: '1px solid red',
    height: 'auto',
    width: '40vw',
    marginTop : '25vh',
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
    width: '40vw',
    marginTop : '0vh',
    marginLeft: '10vw',
    textAlign: 'left',
    fontSize: '1em',
    color: 'white'
}

const buttonDiv ={
    //border: '1px solid red',
    height: '2.5em',
    width: 'calc(10em + 10vw)',
    marginLeft: '10vw',
    textAlign: 'left',
    fontSize: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop : '2em',
}

const buttonStyle = {
    border: '3px solid #17468D',
    borderRadius: '15px',
    width: '10em',
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
    width: '10em',
    marginLeft: '15vw',
    marginTop: '2em',
    color: 'white',
}

const statValueStyle = {
    fontSize: '3em', // Update the font size here
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadow: '0px 0px 0px black', // Add a black border around the font
}

const statLabelStyle = {
    fontSize: '0.8em',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: '0.5em',
    textShadow: '1px 2px 0px black', // Add a black border around the font

}

const dividerStyle = {
    border: '1px solid lightgrey',
    width: '0.01em',
    marginTop: '1em',
    marginInline: '1em',
}

const backgroundVideoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    objectFit: 'cover',
}

const DiscoverPageStyle={
    border : '1px solid red',
    width: '100vw',
    height: '100vh',
    color: 'white',
    fontSize: '2em',
}

export default HomeComponent;
